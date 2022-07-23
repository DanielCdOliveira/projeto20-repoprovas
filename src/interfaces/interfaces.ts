import { User, Test } from "@prisma/client";
export type CreateUserData = Omit<User,"id"|"createdAt">
export type CreateTestData = Omit<Test,"id"|"createdAt">