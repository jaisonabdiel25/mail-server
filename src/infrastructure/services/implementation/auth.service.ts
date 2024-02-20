import { CustomError } from "../../../config/errors";
import { UserEntity } from "../../../domain/entity/user.entity";
import { UserMapper } from "../../../domain/mapper/user.mapper";
import { IAuthRepository } from "../../repositories/interface/auth.interface";
import { IAuthService } from "../interface/auth.interface";


export class AuthService implements IAuthService {
    constructor(
        private readonly _authRepository: IAuthRepository
    ) { }

    async registerUser(user: any): Promise<UserEntity> {
        try {
            //Validate Email
            const userByEmail = await this._authRepository.getUserByEmail(user.email);
            if (userByEmail) throw CustomError.conflict('Email already exists');

            //Create User
            const newUser = await this._authRepository.createUser(user);

            return UserMapper.userEntityFromObject(newUser);

        } catch (error) {
            if(error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}