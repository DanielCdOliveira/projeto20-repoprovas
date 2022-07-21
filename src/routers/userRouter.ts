import { Router } from "express";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { signupSchema,loginSchema } from "../schemas/joiSchemas.js";
import { signup,signin } from "../controllers/userController.js";

const userRouter = Router()
userRouter.post("/sign-up", schemaVerifier(signupSchema), signup)
userRouter.post("/sign-in",schemaVerifier(loginSchema),signin)

export default userRouter 