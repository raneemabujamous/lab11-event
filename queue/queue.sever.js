const port = 3050;
const io = require("socket.io")(port);
const uuid = require("uuid").v4;
const caps = io.of("/caps");
const msgQueue = {
  item: {},
};
caps.on("connection", (socket) => {
  console.log("connection done");
  socket.on("pickup", (payload) => {
    console.log("vendor add new order");
    //add msg in q
    const id = uuid();
    msgQueue.item[id] = {
      event: "pickup",
      time: new Date().toLocaleString(),
      payload: JSON.stringify(payload),
    };
    console.log(msgQueue, "😍");

    //send to vendor your msg added
    socket.emit("addorder", payload);
    /// send to driver to pick up
    caps.emit("pickup", { id: id, payload: msgQueue.item[id] });
  });
  socket.on("in-transit", (payload) => {
    console.log("driver in transit");

    const id = uuid();
    // add order to queue
    msgQueue.item[id] = {
      event: "inTransit",
      time: new Date().toLocaleString(),
      payload: payload,
    };
    //send to vendor iam in road
    // socket.emit("inRoaed", payload);
    console.log(msgQueue, "😍");

    caps.emit("in-transit", { id: id, payload: msgQueue.item[id] });
  });

  socket.on("delivered", (payload) => {
    console.log("it deliverd");
    const id = uuid();
    // add order to queue
    msgQueue.item[id] = {
      event: "delivered",
      time: new Date().toLocaleString(),
      payload: payload,
    };
    //send to driver add msg to queue
    console.log(msgQueue, "😍");
    socket.emit("thankmsg", payload);
    // send msg to vendor
    caps.emit("delivered", payload);
  });
  ////delete order and thanks msg from queue
  socket.on("received", (payload) => {
    console.log(
      "received from the vendor and driver remove it from the Q > 🥵 🥵 🥵 🥵..."
    );
    delete msgQueue.item[payload.id];
    console.log("after deleting the task from Msg Q >> 🥵 🥵 🥵 🥵", msgQueue);
  });
  socket.on("get_all", () => {
    console.log("get all the order for the driver");
    Object.keys(msgQueue.item).forEach((id) => {
      socket.emit("item", { id: id, payload: msgQueue.item[id] });
    });
  });
});
module.exports = caps;
