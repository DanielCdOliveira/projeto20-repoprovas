import { prisma } from "../config/database.js"

import { CreateUserData } from "../interfaces/interfaces.js"

export async function getUserByEmail(email : string) {
    return prisma.user.findFirst({where:{email}})
}
export async function getUserById(id : number) {
    return prisma.user.findFirst({where:{id}})
}
export async function insertNewUser(newUser : CreateUserData) {
    return prisma.user.create({data:{...newUser}})
}