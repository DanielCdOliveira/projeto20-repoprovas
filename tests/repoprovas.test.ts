import app from "../src/app.js"
import supertest from "supertest"
import { prisma } from "../src/config/database.js"
import { generateUser, generateUserRegistered, generateSession, generateWrongUsersEmail, generateWrongUsersṔassword, testCreationCorrect, testIncorrectTeacher, testIncorrectDiscipline, testIncorrectCategory } from "./factories/userFactory.js"


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
    const user = await generateUserRegistered()
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

describe("Tests route test", () => {
  beforeEach(async () => {
    await prisma.test.deleteMany()
  })
  afterAll(async () => {
    await prisma.$disconnect();
  });
  it("returns 201 for valid params to test creation", async () => {
    const token = await generateSession()
    const test = testCreationCorrect
    const result = await supertest(app).post("/test/create").send(test).set('Authorization', "Bearer " + token)
    expect(result.status).toEqual(201);
  });
  it("returns 401 for invalid token", async () => {
    const test = testCreationCorrect
    const result = await supertest(app).post("/test/create").send(test)
    expect(result.status).toEqual(401);
  });
  it("returns 404 for invalid teacher", async () => {
    const token = await generateSession()
    const test = testIncorrectTeacher
    const result = await supertest(app).post("/test/create").send(test).set('Authorization', "Bearer " + token)
    expect(result.status).toEqual(404);
  });
  it("returns 404 for invalid discipline", async () => {
    const token = await generateSession()
    const test = testIncorrectDiscipline
    const result = await supertest(app).post("/test/create").send(test).set('Authorization', "Bearer " + token)
    expect(result.status).toEqual(404);
  });
  it("returns 404 for invalid category", async () => {
    const token = await generateSession()
    const test = testIncorrectCategory
    const result = await supertest(app).post("/test/create").send(test).set('Authorization', "Bearer " + token)
    expect(result.status).toEqual(404);
  });
});