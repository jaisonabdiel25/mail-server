import { Role, User } from "@prisma/client";
import { prisma } from "../../../client";
import { CustomError } from "../../../config/errors";
import { IAuthRepository } from "../interface/auth.interface"
import { RegisterUserDto } from "../../../domain/dtos/registerUser.dto";

export class AuthRepository implements IAuthRepository {

    constructor() { }

    async getUserByEmail(email: string): Promise<User | null> {

        try {
            return await prisma.user.findUnique({ where: { email } })
        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }

    async createUser(user: RegisterUserDto, role: Role): Promise<User> {
        try {
            return await prisma.user.create({ data: { ...user, roles: { create: { roleId: role.id } } } })
        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}