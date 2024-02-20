import { Request, Response } from "express";
import { IAuthService } from "../../infrastructure/services/interface/auth.interface";
import { RegisterUserDto } from "../../domain/dtos/registerUser.dto";

export class AuthController {

    constructor(
        private readonly _authService: IAuthService
    ) {
    }

    register = async (req: Request<unknown, unknown, RegisterUserDto>, res: Response) => {
        const user = await this._authService.registerUser(req.body);
        res.send(user)
    }

    login = async (req: Request, res: Response) => {
        res.send('register')
    }
}