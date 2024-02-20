import { CustomError } from "../../config/errors";
import { UserEntity } from "../entity/user.entity";


export class UserMapper {

    static userEntityFromObject(object: { [key: string]: any }) {

        const { id, name, email,  phone, active, img } = object;

        if (!id) throw CustomError.badRequest('Missing id');

        if (!name) throw CustomError.badRequest('Missing name');

        if (!email) throw CustomError.badRequest('Missing email');


        return new UserEntity(
            id,
            name,
            email,
            phone,
            active,
            img
        )
    }
}