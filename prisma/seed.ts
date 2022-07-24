import { prisma } from "../src/config/database.js";
import { categories, disciplines, teachers, teachersDisciplines, terms, users } from "./data/data.js";
import dotenv from "dotenv"
dotenv.config()
console.log("seed running on base" + process.env.DATABASE_URL)

async function seed(){
    await prisma.user.createMany({
        data: users
    })
    await prisma.term.createMany({
        data: terms
    })
    await prisma.category.createMany({
        data: categories
    })
    await prisma.teacher.createMany({
        data: teachers
    })
    await prisma.discipline.createMany({
        data: disciplines
    })
    await prisma.teacherDiscipline.createMany({
        data: teachersDisciplines
    })
}seed().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})