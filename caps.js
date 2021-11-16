// const io = require("socket.io")(3000); //ew creating the namespace

// const uuid = require("uuid").v4;
// const caps = io.of("/caps");
// const msgQueue = {
//   item: {},
// };

// caps.on("connection", (socket) => {
//   console.log("welcome to our connection socket from caps", socket.id); //connect it all route
//   socket.on("pickup", (payload) => {
//     let result = {
//       event: "pickup",
//       time: new Date().toLocaleString(),
//       payload: payload,
//     };
//     console.log("Event", result);
//     const id = uuid();

//     // 2 add the chore to the Msg Q
//     msgQueue.item[id] = payload;
//     console.log("after adding task Msg Q >>", msgQueue);

//     socket.emit("takeOrder", { id: id, payload: msgQueue.item[id] });
//     caps.emit("pickup", payload);
//   });

//   socket.on("in-transit", (payload) => {
//     let result = {
//       event: "inTransit",
//       time: new Date().toLocaleString(),
//       payload: payload,
//     };
//     console.log("Event", result);
//     socket.emit("inthewaywithOrder", { id: id, payload: msgQueue.item[id] });

//     caps.emit("in-transit", payload);
//   });
//   ///////////////////
//   socket.on("delivered", (payload) => {
//     let result = {
//       event: "delivered",
//       time: new Date().toLocaleString(),
//       payload: payload,
//     };
//     console.log("Event", result);
//     caps.emit("delivered", payload);
//   });
//   ////////////////////
// });

// module.exports = caps;
