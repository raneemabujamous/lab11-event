const events = require("../event.pool");
var faker = require("faker");

const storeName = "Raneem shop";
events.on("delivered", thankYou);
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
  events.emit("pickup", order);
  //   console.log(order);
}, 5000);
module.exports = events;
