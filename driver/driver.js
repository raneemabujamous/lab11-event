const events = require("../event.pool");
events.on("pickup", pickUp);
function pickUp(payload) {
  //   setTimeout(() => {
  //     console.log(`DRIVER: picked up ${payload.orderID}`);
  //     events.emit("in-transit", payload);
  //   }, 1000);

  //   setTimeout(() => {
  //     console.log(`DRIVER: delivered${payload.orderID}`);
  //     events.emit("delivered", payload);
  //   }, 3000);

  setInterval(() => {
    console.log(`DRIVER: picked up in-transit ${payload.orderID}`);

    events.emit("in-transit", payload);
  }, 1000);

  setInterval(() => {
    console.log(`DRIVER: delievered ${payload.orderID}`);
    events.emit("delivered", payload);
  }, 3000);
}
