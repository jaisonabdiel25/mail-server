import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { CustomError } from "../../config/errors";

export const schemaValidations =
    (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                return res.status(412).json(error.errors.map(({path, message}) => ({ key: path[0], message: message })));
            }
            throw CustomError.internal();
        }
    }