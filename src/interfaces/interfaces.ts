import { User, Test } from "@prisma/client";
export type CreateUserData = Omit<User,"id">
export type CreateTestData = Omit<Test,"id"|"createdAt">