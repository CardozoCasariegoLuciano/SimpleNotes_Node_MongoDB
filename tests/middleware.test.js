const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("Middleware token_validation", () => {
  describe("When no token provided", () => {
    test("Should respond with a 401 status code (unauthorized)", async () => {
      await api.get("/api/user").expect(401);
    });
  });

  describe("When a token is provided", () => {
    const registerData = {
      name : "Yadk",
      email: "yadk@gmail.com",
      password: "1234",
      repited_password: "1234",
    }

    let token = null

    beforeAll(async(done) => {
       api.post("/register").send(registerData).end((err, res) => {
        if(err) return done(err)

        token = res.body.Token
        done()
      }) 
    })

    test("Should respond with a 200 status code", async()=>{
      await api.get("/api/user").expect(200)
    })
  })
});
