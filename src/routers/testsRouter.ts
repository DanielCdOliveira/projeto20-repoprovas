import { Router } from "express";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { testSchema } from "../schemas/joiSchemas.js";
import { createTest } from "../controllers/testsController.js";
const testsRouter = Router()
testsRouter.post("/test/create", schemaVerifier(testSchema), createTest)

export default testsRouter 