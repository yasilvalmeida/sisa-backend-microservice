import { ClientKafka } from '@nestjs/microservices';
import { CheckHealthEvent } from './events/check-heath.event';
export declare class AppService {
    private readonly authClient;
    constructor(authClient: ClientKafka);
    getHello(): string;
    handleCheckHealth(checkHealthEvent: CheckHealthEvent): void;
}
