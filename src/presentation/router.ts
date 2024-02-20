import { Router } from 'express';
import { MailRoutes } from './mail/router';
import { AuthRoutes } from './auth/router';
import { SeedRoutes } from './seed/router';


export class AppRouter {

    static get routes(): Router {
        const router = Router();

        router.use('/api/mail', MailRoutes.routes);
        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/seed', SeedRoutes.routes);
        return router;
    }
}