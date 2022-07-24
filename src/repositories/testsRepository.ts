import { prisma } from "../config/database.js"
import { CreateTestData } from "../interfaces/interfaces.js"
export async function findCategoryId(category: string) {    
    return prisma.category.findFirst({
        where: {
            name: { equals: category, mode: 'insensitive' },
        }
    })
}
export async function findTeacherId(teacher: string) {
    return prisma.teacher.findFirst({
        where: {
            name: { equals: teacher, mode: 'insensitive' },
        }
    })
}
export async function findDisciplineId(discipline: string) {
    return prisma.discipline.findFirst({
        where: {
            name: { equals: discipline, mode: 'insensitive' },
        }
    })
}
export async function findTeacehrDisciplineId(teacherId: number, disciplineId:number) {
    return prisma.teacherDiscipline.findFirst({
        where: {
           teacherId,
           disciplineId
        }
    })
}
export async function insertTest(newTest : CreateTestData) {
   await prisma.test.create({data:{...newTest}})
}