import { Request, Response } from "express";

export class AuthController{

    constructor(){    
    }

    async login(req: Request, res: Response){
        res.send('login')
    }

    async register(req: Request, res: Response){
        res.send('register')
    }
}