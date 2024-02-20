import { ZodError } from "zod";
import { CustomError } from "../../config/errors";


export class RegisterUserDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string,
        public status: boolean,
        public phone?: string,
        public img?: string
    ) { }

    static RegisterUser(object: { [key: string]: any }): [string[], RegisterUserDto?] {
        const { name, email, password, img, phone } = object
        try {
            return [
                [],
                new RegisterUserDto(name, email, password, img, phone)
            ];
        } catch (error) {
            if (error instanceof ZodError) {
                return [error.errors.map(issues => issues.message), undefined]
            }
            throw CustomError.internal();
        }
    }
}