import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('check_health')
  handleOrderCreated(data: any) {
    console.log('ms-ajuda-reached', data);
    return this.appService.handleCheckHealth(data);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}
