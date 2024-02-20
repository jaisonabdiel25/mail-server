import { Request, Response } from "express";
import { IAuthService } from "../../infrastructure/services/interface/auth.interface";
import { RegisterUserDto } from "../../domain/dtos/registerUser.dto";
import { CustomError } from "../../config/errors";

export class AuthController {

    constructor(
        private readonly _authService: IAuthService
    ) {
    }

    register = async (req: Request<unknown, unknown, RegisterUserDto>, res: Response) => {
        try {
            const user = await this._authService.registerUser(req.body);
            res.send(user)
        } catch (error) {
            CustomError.handleErrors(error, res);
        }
    }

    login = async (req: Request, res: Response) => {
        res.send('register')
    }
}