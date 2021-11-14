const events = require("./event.pool");
require("./driver/driver");
require("./vendor/vendor");
events.on("in-transit", inTransit);
events.on("delivered", delivered);
events.on("pickup", pickUp);

function pickUp(payload) {
  let result = {
    event: "pickup",
    time: new Date().toLocaleString(),
    payload: payload,
  };
  console.log("Event", result);
}

function inTransit(payload) {
  let result = {
    event: "inTransit",
    time: new Date().toLocaleString(),
    payload: payload,
  };
  console.log("Event", result);
}

function delivered(payload) {
  let result = {
    event: "delivered",
    time: new Date().toLocaleString(),
    payload: payload,
  };
  console.log("Event", result);
}
