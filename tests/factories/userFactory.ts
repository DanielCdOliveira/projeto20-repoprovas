import {faker} from "@faker-js/faker"
import {prisma} from "../../src/config/database.js"
import app from "../../src/app.js"
import supertest from "supertest"

export async function generateUser() {
    return { 
        email: faker.internet.email(), 
        password: "1234567890",
        passwordConfirmation: "1234567890"
    }
}
export async function generateWrongUsersEmail() {
    return { 
        email:"das#email.com", 
        password: "1234567890",
        passwordConfirmation: "1234567890"
    }
}
export async function generateWrongUsersṔassword() {
    return { 
        email: faker.internet.email(), 
        password: "123456789",
        passwordConfirmation: "123456789"
    }
}
export async function generateSession() {
    const user ={ 
        email: faker.internet.email(), 
        password: "1234567890",
        passwordConfirmation: "1234567890"
    }
    await supertest(app).post("/sign-up").send(user)
    delete user.passwordConfirmation
    return user
}