import { Router } from "express";
import { MailController } from "./controller";
import { MailService } from "../../infrastructure/mail/implementation/mail.service";

export class MailRoutes {

    static get routes(): Router {
        const router = Router();

        const mailService = new MailService();
        const controller = new MailController(mailService);

        // definir las rutas
        router.post('/send', controller.sendMail);

        return router;
    }
}