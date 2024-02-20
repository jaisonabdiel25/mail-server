import { Role } from "@prisma/client";

export abstract class IRoleRepository {
    abstract getAllRoles(): Promise<Role[]>
    abstract getRoleByName (name: string): Promise<Role | null>
}