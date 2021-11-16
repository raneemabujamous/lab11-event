// const events = require("../event.pool");
const io = require("socket.io-client");
const host = "http://localhost:3050";
const capsconnection = io.connect(`${host}/caps`);
// const storeName = "Raneem shop";
// socket.emit("join", storeName);
capsconnection.emit("get_all");

capsconnection.on("pickup", pickUp);
function pickUp(payload) {
  // console.log(payload, "from console log");
  // capsconnection.emit("received", payload.id);

  setInterval(() => {
    console.log(`DRIVER: picked up in-transit ${payload.id}`);

    capsconnection.emit("in-transit", JSON.stringify(payload));
  }, 1000);

  setInterval(() => {
    console.log(`DRIVER: delievered ${payload.id}`);
    capsconnection.emit("delivered", JSON.stringify(payload));
  }, 3000);
  capsconnection.emit("received", payload.id);
}
capsconnection.on("thankmsg", (payload) => {
  console.log("Thank u for saving msg id deliverd in ququ   ", payload);
  // capsconnection.disconnect();
});
// capsconnection.on("inRoaed", (payload) => {
//   console.log("Thank u for save iam in road Q>> ", payload);
//   socket.disconnect();
//   // capsconnection.emit("received", payload);
// });
