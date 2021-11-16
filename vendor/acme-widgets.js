var faker = require("faker");
const io = require("socket.io-client"); //becouse it client
const host = "http://localhost:3000";
const capsconnection = io.connect(`${host}/caps`); //cliennt will contect to caps namespace
const storename = "acme-widgets";

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
socket.on("addorder", (payload) => {
  console.log("Thank u for adding my order to the Q>> ", payload);
  //   socket.disconnect();
});
