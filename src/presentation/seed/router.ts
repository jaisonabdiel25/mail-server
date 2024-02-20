import { Router } from "express";
import { SeedController } from "./controller";
import { SeedService } from "../../infrastructure/services/implementation/seed.service";
import { SeedRepository } from "../../infrastructure/repositories/implementation/seed.repository";



export class SeedRoutes {

    static get routes(): Router {
        const router = Router();

        const seedRepository = new SeedRepository();
        const seedService = new SeedService(seedRepository);
        const controller = new SeedController(seedService);

        // definir las rutas
        router.post('/role', controller.seedRoles);

        return router;
    }
}