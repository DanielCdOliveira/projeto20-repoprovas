import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import schemaVerifier from "../middlewares/schemaVerifier.js";
import { testSchema } from "../schemas/joiSchemas.js";
import { createTest } from "../controllers/testsController.js";
const testsRouter = Router()
testsRouter.post("/test/create",verifyToken, schemaVerifier(testSchema), createTest)
testsRouter.get("/tests/discipline",verifyToken, schemaVerifier(testSchema), createTest)

export default testsRouter 