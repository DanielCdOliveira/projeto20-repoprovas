import bcrypt from "bcrypt"

const users = [
    {email: "admin@admin.com", password: bcrypt.hashSync("4815162342", 10)},
    {email: "prisma@admin.com", password: bcrypt.hashSync("31415926535", 10)}
]

const terms = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
]

const categories = [
    {name: 'Projeto'},
    {name: 'Prática'},
    {name: 'Recuperação'},
]

const teachers = [
    {name: 'Diego Pinho'},
    {name: 'Bruna Hamori'},
]

const disciplines = [
    {name: "HTML e CSS", termId: 1},
    {name: "JavaScript", termId: 2},
    {name: "React", termId: 3},
    {name: "Humildade", termId: 4},
    {name: "Planejamento", termId: 5},
    {name: "Autoconfiança", termId: 6},
]

const teachersDisciplines = [
    {teacherId: 1, disciplineId: 1},
    {teacherId: 1, disciplineId: 2},
    {teacherId: 1, disciplineId: 3},
    {teacherId: 2, disciplineId: 4},
    {teacherId: 2, disciplineId: 5},
    {teacherId: 2, disciplineId: 6},
]

export {
    users,
    terms,
    categories,
    teachers,
    disciplines,
    teachersDisciplines
}