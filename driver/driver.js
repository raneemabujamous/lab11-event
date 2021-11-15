// const events = require("../event.pool");
const io = require("socket.io-client");
const host = "http://localhost:3000";
const capsconnection = io.connect(`${host}/caps`);
// const storeName = "Raneem shop";
// socket.emit("join", storeName);

capsconnection.on("pickup", pickUp);
function pickUp(payload) {
  setInterval(() => {
    console.log(`DRIVER: picked up in-transit ${payload.orderID}`);

    capsconnection.emit("in-transit", payload);
  }, 1000);

  setInterval(() => {
    console.log(`DRIVER: delievered ${payload.orderID}`);
    capsconnection.emit("delivered", payload);
  }, 3000);
}
