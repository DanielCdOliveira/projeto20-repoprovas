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
export async function generateUserRegistered() {
    const user ={ 
        email: faker.internet.email(), 
        password: "1234567890",
        passwordConfirmation: "1234567890"
    }
    await supertest(app).post("/sign-up").send(user)
    delete user.passwordConfirmation
    return user
}
export async function generateSession() {
    const user ={ 
        email: faker.internet.email(), 
        password: "1234567890",
        passwordConfirmation: "1234567890"
    }
    await supertest(app).post("/sign-up").send(user)
    delete user.passwordConfirmation
    const result = await supertest(app).post("/sign-in").send(user)    
    return (JSON.parse(result.text)).token
}
export const testCreationCorrect ={
    name: "miau",
    pdfUrl:"https://www.youtube.com/watch?v=SGqg_ZzThDU",
    category: "Projeto",
    teacher:"Diego Pinho" ,
    discipline: "React"
}
export const testIncorrectTeacher ={
    name: "miau",
    pdfUrl:"https://www.youtube.com/watch?v=SGqg_ZzThDU",
    category: "Projeto",
    teacher:faker.name.findName(),
    discipline: "React"
}
export const testIncorrectDiscipline ={
    name: "miau",
    pdfUrl:"https://www.youtube.com/watch?v=SGqg_ZzThDU",
    category: "Projeto",
    teacher:"Diego Pinho",
    discipline: "Disciplina errada"
}
export const testIncorrectCategory ={
    name: "miau",
    pdfUrl:"https://www.youtube.com/watch?v=SGqg_ZzThDU",
    category: "Categoria errada",
    teacher:"Diego Pinho",
    discipline: "Reactzao brabo"
}