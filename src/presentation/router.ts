import { Router } from 'express';
import { MailRoutes } from './mail/router';
import { AuthRoutes } from './auth/router';


export class AppRouter {

    static get routes(): Router {
        const router = Router();

        router.use('/api/mail', MailRoutes.routes);
        router.use('/api/auth', AuthRoutes.routes);
        return router;
    }
}