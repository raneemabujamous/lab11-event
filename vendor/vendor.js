// const events = require("../event.pool");
var faker = require("faker");
const io = require("socket.io-client"); //becouse it client
const host = "http://localhost:3000";
const capsconnection = io.connect(`${host}/caps`); //cliennt will contect to caps namespace
const storeName = "Raneem shop";
// socket.emit("join", storeName);

capsconnection.on("delivered", thankYou);
function thankYou(payload) {
  console.log(`thank you ${payload.customer}`);
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
// module.exports = events;
