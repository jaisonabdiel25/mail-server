import { ZodError } from "zod";


export class LoginUserDto {
    constructor(
        public email: string,
        public password: string,
    ) { }

    static loginUser(object: { [key: string]: any }): [string[], LoginUserDto?] {
        const { email, password } = object
        try {

            return [
                [],
                new LoginUserDto(email, password)
            ];
        } catch (error) {
            if (error instanceof ZodError) {
                return [error.errors.map(issues => issues.message), undefined]
            }
            throw error;
        }
    }
}