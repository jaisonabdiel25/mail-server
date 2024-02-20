import { CustomError } from "../../../config/errors";
import { ISeedRepository } from "../../repositories/interface/seed.interface";
import { ISeedService } from "../interface/seed.interface";


export class SeedService implements ISeedService {
    constructor(private readonly seedRepository: ISeedRepository) {
    }
    seedRoles = async () => {
        try {
            await this.seedRepository.seedRoles();

        } catch (error) {
            if (error instanceof CustomError) throw error;
            throw CustomError.internal();
        }
    }
}