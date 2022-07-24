import * as testsRepository from "../repositories/testsRepository.js"
import { CreateTestData } from "../interfaces/interfaces.js"
export async function findCategoryId(category: string) {
    const result = await testsRepository.findCategoryId(category)    
    if (!result) {
        throw {
            type: "not_found",
            message: "category not found"
        }
    }
    return result.id
}
export async function findTeacherId(category: string) {
    const result = await testsRepository.findTeacherId(category)
    if (!result) {
        throw {
            type: "not_found",
            message: "teacher not found"
        }
    }
    return result.id
}
export async function findDisciplineId(category: string) {
    const result = await testsRepository.findDisciplineId(category)
    if (!result) {
        throw {
            type: "not_found",
            message: "discipline not found"
        }
    }
    return result.id
}
export async function findTeacherDisciplineId(teacherId: number, disciplineId: number) {
    const result = await testsRepository.findTeacehrDisciplineId(teacherId, disciplineId)
    if (!result) {
        throw {
            type: "not_found",
            message: "teacher and discipline not compatible"
        }
    }
    return result.id
}
export async function insertTest(newTest: CreateTestData) {
    await testsRepository.insertTest(newTest)
}
export async function getTestsByDiscipline() {
    return await testsRepository.getTestsByDiscipline()
}
export async function getTestsByTeacher() {
    return await testsRepository.getTestsByTeacher()
}