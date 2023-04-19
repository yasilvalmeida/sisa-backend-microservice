import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { IAccountCheck, IActivationToken } from './interface/auth.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create-activation-token')
  async createActivationToken(@Payload() data: any): Promise<IActivationToken> {
    const { email } = data;
    return this.appService.createActivationToken(email);
  }

  @MessagePattern('activate-account')
  async activateAccount(@Payload() data: any): Promise<any> {
    const { token } = data;
    return this.appService.activateAccount(token);
  }

  @MessagePattern('check-account')
  async checkAccount(@Payload() data: any): Promise<IAccountCheck> {
    const { email } = data;
    return this.appService.checkAccount(email);
  }
}
