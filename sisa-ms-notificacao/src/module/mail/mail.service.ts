import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IRequestActivationToken } from 'src/interface/mail.interface';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendActivationToken(data: IRequestActivationToken) {
    const { email, nome, token } = data;
    const { value, expiresIn } = token;
    const url = `localhost:8000/api/ms-auth/activate-account?token=${value}`;

    const sendResult = await this.mailerService.sendMail({
      to: email,
      subject: 'Bem-vindo ao SISA! Activar a sua conta',
      template: './activation',
      context: {
        nome,
        url,
        token: value,
        expiresIn,
      },
    });
    return sendResult;
  }
}
