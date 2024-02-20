import { RegisterUserDto } from "../../../domain/dtos/registerUser.dto";
import { UserEntity } from "../../../domain/entity/user.entity";


export abstract class IAuthService {
    abstract registerUser(user: RegisterUserDto): Promise<UserEntity>;
}