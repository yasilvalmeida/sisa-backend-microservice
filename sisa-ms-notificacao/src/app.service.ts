import { Injectable } from '@nestjs/common';
import { IRequestActivationToken } from './interface/mail.interface';
import { MailService } from './module/mail/mail.service';

@Injectable()
export class AppService {
  constructor(private readonly mailService: MailService) {}

  async sendActivationToken(data: IRequestActivationToken) {
    console.log('ms-notification-service', data);
    return this.mailService.sendActivationToken(data);
  }
}
