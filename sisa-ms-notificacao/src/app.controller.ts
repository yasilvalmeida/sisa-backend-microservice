import { Controller, Req } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IRequestActivationToken } from './interface/mail.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('send-activation-token')
  async sendActivationToken(@Payload() data: IRequestActivationToken) {
    return this.appService.sendActivationToken(data);
  }
}
