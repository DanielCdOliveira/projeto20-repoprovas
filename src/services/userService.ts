import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { CreateUserData } from "../interfaces/interfaces.js"
import * as userRepository from "../repositories/userRepository.js"

const SALT = parseInt(process.env.SALT)
const JWT = process.env.JWT

export async function createUser(newUser: CreateUserData) {
    const userExists = await userRepository.getUserByEmail(newUser.email)
    if (userExists) {
        throw {
            type: "conflict",
            message: `${newUser.email} already registered`
        }
    }
    newUser.password = bcrypt.hashSync(newUser.password, SALT)
    await userRepository.insertNewUser(newUser)
}
export async function login(user: CreateUserData) {
    const userDb = await userRepository.getUserByEmail(user.email)
    if (userDb && bcrypt.compareSync(user.password, userDb.password)) {
        const token = jwt.sign({ id: userDb.id }, JWT);
        return token
    }
    throw {
        type: "unauthorized",
        message: `Incompatible username and password`
    }
}
export async function checkToken(authorization: string) {
    const token = authorization?.replace("Bearer ", "").trim();
    if (!token) {
        throw {
            type: "unauthorized",
            message: "invalid token"
        }
    }
    const data = jwt.verify(token, JWT) as any;
    const { id } = await userRepository.getUserById(data.id)
    if (!id) {
        throw {
            type: "not_found",
            message: "user not found"
        }
    }
    return id
}