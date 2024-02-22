import { Request, Response } from "express";
import { IAuthService } from "../../infrastructure/services/interface/auth.interface";
import { RegisterUserDto } from "../../domain/dtos/registerUser.dto";
import { CustomError } from "../../config/errors";
import { jwtAdapter } from "../../config/jwt";
import { LoginUserDto } from "../../domain/dtos/loginUser.dto";

export class AuthController {

    constructor(
        private readonly _authService: IAuthService
    ) {
    }

    register = async (req: Request<unknown, unknown, RegisterUserDto>, res: Response) => {
        try {
            const result = await this._authService.registerUser(req.body);
            res.json({ result, token: await jwtAdapter.generateToken({ id: result.id, role: result.roles }) });
        } catch (error) {
            CustomError.handleErrors(error, res);
        }
    }

    login = async (req: Request<unknown, unknown, LoginUserDto>, res: Response) => {

        try {
            const { body } = req;
            const result = await this._authService.login(body);
            res.json({ result, token: await jwtAdapter.generateToken({ id: result.id, role: result.roles }) });
        } catch (error) {
            CustomError.handleErrors(error, res);
        }
    }
}