import { Role, User } from "@prisma/client";
import { RegisterUserDto } from "../../../domain/dtos/registerUser.dto";

export abstract class IAuthRepository {
    abstract getUserByEmail(email: string): Promise<User | null>;
    abstract createUser(user: RegisterUserDto, role: Role): Promise<User>;
}
