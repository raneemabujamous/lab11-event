"use strict";

// const events = require("../event.pool");
var faker = require("faker");
const caps = require("../queue/queue.sever");
let order = {
  store: "raneem shop",
  orderID: "1",
  customer: "mariam",
  address: "jordan",
};
describe("testing all process", () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
  });

  test("pickup event Work", async () => {
    caps.emit("pickup", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("in-transit event Work ", async () => {
    caps.emit("in-transit", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("delivered event Work  ", async () => {
    caps.emit("delivered", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });
});
