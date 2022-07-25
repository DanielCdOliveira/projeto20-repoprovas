import app from "../src/app.js"
import supertest from "supertest"
import { prisma } from "../src/config/database.js"
import { generateUser, generateUserRegistered, generateSession, generateWrongUsersEmail, generateWrongUsersṔassword, testCreationCorrect, testIncorrectTeacher, testIncorrectDiscipline, testIncorrectCategory } from "./factories/userFactory.js"


describe("Tests creation route", () => {
    beforeEach(async () => {
        await prisma.$executeRaw`TRUNCATE TABLE tests`
    })
    afterAll(async () => {
        await prisma.$executeRaw`TRUNCATE TABLE tests`
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

describe("Get tests route", () => {

    it("returns 200 for valid token,tests by discipline", async () => {
        const token = await generateSession()
        const result = await supertest(app).get("/tests/discipline").set('Authorization', "Bearer " + token)
        expect(result.status).toEqual(200)
    })
    it("returns 200 for valid token,tests by teacher", async () => {
        const token = await generateSession()
        const result = await supertest(app).get("/tests/teacher").set('Authorization', "Bearer " + token)
        expect(result.status).toEqual(200)
    })
    it("returns 401 for invalid token,tests by teacher", async () => {
        const result = await supertest(app).get("/tests/teacher")
        expect(result.status).toEqual(401)
    })
    it("returns 401 for invalid token,tests by discipline", async () => {
        const result = await supertest(app).get("/tests/discipline")
        expect(result.status).toEqual(401)
    })


})