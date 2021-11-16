// const events = require("../event.pool");
var faker = require("faker");
const io = require("socket.io-client"); //becouse it client
const host = "http://localhost:3050";
const capsconnection = io.connect(`${host}/caps`); //cliennt will contect to caps namespace
const storeName = "Raneem shop";
// socket.emit("join", storeName);
capsconnection.emit("get_all");

capsconnection.on("delivered", thankYou);
function thankYou(payload) {
  console.log(payload, "from vendor tp acess it");
  console.log(`thank you for delivered`);
}
setInterval(() => {
  let order = {
    store: storeName,
    orderID: faker.datatype.uuid(),
    customer: faker.name.firstName(),
    address: faker.address.city(),
  };
  capsconnection.emit("pickup", order);
  //   console.log(order);
}, 5000);
capsconnection.on("addorder", (payload) => {
  console.log("Thank u for adding my order to the Q>> ", payload);
  // capsconnection.disconnect();
  // capsconnection.emit("received", payload);
});
