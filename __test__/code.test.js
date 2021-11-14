"use strict";

const events = require("../event.pool");
var faker = require("faker");

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
    events.emit("pickup", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("in-transit event Work ", async () => {
    events.emit("in-transit", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  test("delivered event Work  ", async () => {
    events.emit("delivered", order);
    await consoleSpy();
    expect(consoleSpy).toHaveBeenCalled();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });
});
