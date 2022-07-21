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