import { Request, Response } from 'express';
import { SeedService } from '../../infrastructure/services/implementation/seed.service';
import { CustomError } from '../../config/errors';

export class SeedController {
    constructor(
        private readonly _seedService: SeedService,
    ) { }

     seedRoles = async (req: Request, res: Response) => {

        try {
            const seed = await this._seedService.seedRoles();
            res.status(204).json(seed);
        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }

    }
}