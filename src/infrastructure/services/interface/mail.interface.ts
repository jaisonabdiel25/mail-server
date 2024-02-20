import { SentMessageInfo } from 'nodemailer';
import { SendMailDto } from '../../../domain/dtos/sendMail.dto';

export abstract class IMailService {
    abstract sendMail(sendMailDto: SendMailDto): Promise<SentMessageInfo>;
}