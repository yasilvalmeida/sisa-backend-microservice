import { OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { AppService } from './app.service';
export declare class AppController implements OnModuleInit {
    private readonly appService;
    private readonly authClient;
    constructor(appService: AppService, authClient: ClientKafka);
    getHello(): string;
    handleOrderCreated(data: any): void;
    onModuleInit(): void;
}
