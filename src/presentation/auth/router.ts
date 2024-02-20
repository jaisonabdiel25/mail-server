import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepository } from "../../infrastructure/repositories/implementation/auth.repository";
import { AuthService } from "../../infrastructure/services/implementation/auth.service";
import { schemaValidations } from "../../domain/middelwares/validationSchema";
import { registerUserSchema } from "../../domain/schema/registerUser.schema";
import { RoleRepository } from "../../infrastructure/repositories/implementation/role.repository";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();

        const roleRepository = new RoleRepository();
        const authRepositorie = new AuthRepository();
        const authService = new AuthService(authRepositorie, roleRepository);
        const controller = new AuthController(authService);

        // definir las rutas
        router.post('/register', schemaValidations(registerUserSchema), controller.register);
        router.post('/login', controller.login);

        return router;
    }
}