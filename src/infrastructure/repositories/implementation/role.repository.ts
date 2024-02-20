import { Role } from "@prisma/client";
import { CustomError } from "../../../config/errors";
import { IRoleRepository } from "../interface/role.interface";
import { prisma } from "../../../client";


export class RoleRepository implements IRoleRepository {

    constructor() {

    }

    async getAllRoles(): Promise<Role[]> {
        try {
            return await prisma.role.findMany();

        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }

    async getRoleByName(name: string): Promise<Role | null> {
        try {
            return await prisma.role.findFirst({ where: { name } });

        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}