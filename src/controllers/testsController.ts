import { Request, Response } from "express";

import * as testsServices from "../services/testServices.js"

export async function createTest(req: Request, res: Response) {
   const {name, pdfUrl, category, teacher, discipline} = req.body
   const categoryId = await testsServices.findCategoryId(category)
   const teacherId = await testsServices.findTeacherId(teacher)
   const disciplineId = await testsServices.findDisciplineId(discipline)
   const teacherDisciplineId = await testsServices.findTeacherDisciplineId(teacherId,disciplineId)
   await testsServices.insertTest({name, pdfUrl, categoryId, teacherDisciplineId})
   res.sendStatus(201)
}

    