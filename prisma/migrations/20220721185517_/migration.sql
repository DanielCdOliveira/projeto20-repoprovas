/*
  Warnings:

  - You are about to drop the `teachers-disciplines` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[number]` on the table `terms` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "disciplines" DROP CONSTRAINT "disciplines_termId_fkey";

-- DropForeignKey
ALTER TABLE "teachers-disciplines" DROP CONSTRAINT "teachers-disciplines_disciplineId_fkey";

-- DropForeignKey
ALTER TABLE "teachers-disciplines" DROP CONSTRAINT "teachers-disciplines_teacherId_fkey";

-- DropForeignKey
ALTER TABLE "tests" DROP CONSTRAINT "tests_teacherDisciplineId_fkey";

-- DropTable
DROP TABLE "teachers-disciplines";

-- CreateTable
CREATE TABLE "teachersDisciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES "terms"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tests" ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
