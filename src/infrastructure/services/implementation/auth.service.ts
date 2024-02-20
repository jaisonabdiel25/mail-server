import { CustomError } from "../../../config/errors";
import { RegisterUserDto } from "../../../domain/dtos/registerUser.dto";
import { UserEntity } from "../../../domain/entity/user.entity";
import { UserMapper } from "../../../domain/mapper/user.mapper";
import { IAuthRepository } from "../../repositories/interface/auth.interface";
import { IRoleRepository } from "../../repositories/interface/role.interface";
import { IAuthService } from "../interface/auth.interface";


export class AuthService implements IAuthService {
    constructor(
        private readonly _authRepository: IAuthRepository,
        private readonly _roleRepository: IRoleRepository
    ) { }

    async registerUser(user: RegisterUserDto): Promise<UserEntity> {
        try {
            //Validate Email
            const userByEmail = await this._authRepository.getUserByEmail(user.email);
            if (userByEmail) throw CustomError.conflict('Email already exists');

            const role = await this._roleRepository.getRoleByName('MODERATOR');

            if (!role) {
                throw CustomError.internal('El rol MODERATOR no existe');
            }

            //Create User
            const newUser = await this._authRepository.createUser(user, role);

            return UserMapper.userEntityFromObject(newUser);

        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}