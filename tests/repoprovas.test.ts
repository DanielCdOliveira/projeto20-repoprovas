import app from "../src/app.js"
import supertest from "supertest"
import { prisma } from "../src/config/database.js"
import { generateUser, generateSession, generateWrongUsersEmail,generateWrongUsersṔassword } from "./factories/userFactory.js"


describe("User route test", () => {
  beforeEach(async () => {
    await prisma.user.deleteMany()
  })
  afterAll(async () => {
    await prisma.$disconnect();
  });
  it("returns 201 for valid params", async () => {
    const body = await generateUser()
    const result = await supertest(app).post("/sign-up").send(body);
    const status = result.status;
    expect(status).toEqual(201);
  });
  it("returns 422 for invalid params in signup", async () => {
    const wrongEmailUser = await generateWrongUsersEmail()
    const wrongPasswordUser = await generateWrongUsersṔassword()
    const result1 = await supertest(app).post("/sign-up").send(wrongEmailUser);
    const result2 = await supertest(app).post("/sign-up").send(wrongPasswordUser);
    expect(result1.status).toEqual(422);
    expect(result2.status).toEqual(422);
  });

  it("returns 409 for email registered", async () => {
    const user = await generateUser()
    await supertest(app).post("/sign-up").send(user)
    const result = await supertest(app).post("/sign-up").send(user)
    expect(result.status).toEqual(409)
  });

  it("return 200 for login sucess", async () => {
    const user = await generateSession()
    const result = await supertest(app).post("/sign-in").send(user)
    expect(result.status).toEqual(200)
  });
  it("return 401 for login failed", async () => {
    const user = await generateUser()
    delete user.passwordConfirmation
    const result = await supertest(app).post("/sign-in").send(user)
    expect(result.status).toEqual(401)
  });

});