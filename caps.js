// const events = require("./event.pool");
// require("./driver/driver");
// require("./vendor/vendor");
const io = require("socket.io")(3000); //ew creating the namespace
const caps = io.of("/caps"); //declare namespace under route one
io.on("connection", (socket) => {
  console.log("Welcome to Global Connection ! ", socket.id);
});

caps.on("connection", (socket) => {
  console.log("welcome to our connection socket from caps", socket.id); //connect it all route
  socket.on("pickup", (payload) => {
    let result = {
      event: "pickup",
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log("Event", result);
    caps.emit("pickup", payload);
  });

  socket.on("in-transit", (payload) => {
    let result = {
      event: "inTransit",
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log("Event", result);
    caps.emit("in-transit", payload);
  });
  ///////////////////
  socket.on("delivered", (payload) => {
    let result = {
      event: "delivered",
      time: new Date().toLocaleString(),
      payload: payload,
    };
    console.log("Event", result);
    caps.emit("delivered", payload);
  });
  ////////////////////
});

// function pickUp(payload) {
//   let result = {
//     event: "pickup",
//     time: new Date().toLocaleString(),
//     payload: payload,
//   };
//   console.log("Event", result);
//   caps.emit("pickup", payload);
// }

// function inTransit(payload) {
//   let result = {
//     event: "inTransit",
//     time: new Date().toLocaleString(),
//     payload: payload,
//   };
//   console.log("Event", result);
//   caps.emit("in-transit", payload);
// }

// function delivered(payload) {
//   let result = {
//     event: "delivered",
//     time: new Date().toLocaleString(),
//     payload: payload,
//   };
//   console.log("Event", result);
//   caps.emit("delivered", payload);
// }
module.exports = caps;
