import joi from "joi"

export const signupSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required(),
    passwordConfirmation: joi.ref("password")
})
export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(10).required(),
})
export const testSchema = joi.object({
    name: joi.string().min(1).required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.string().min(1).required(),
    teacher: joi.string().min(1).required(),
    discipline: joi.string().min(1).required(),
})