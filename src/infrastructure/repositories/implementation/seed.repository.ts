import { prisma } from "../../../client";
import { ISeedRepository } from "../interface/seed.interface";



export class SeedRepository implements ISeedRepository {
    async seedRoles(): Promise<void> {
        const roles = [
            { name: 'ADMIN' },
            { name: 'USER' },
            { name: 'MODERATOR' }
        ]
        await prisma.role.createMany({
            data: roles
        })
    }
}