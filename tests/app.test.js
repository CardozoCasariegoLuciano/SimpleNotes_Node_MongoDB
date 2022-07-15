const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("TODO", () => {
  test("1+1=2", () => {
    expect(1 + 1).toBe(2);
  });
});
