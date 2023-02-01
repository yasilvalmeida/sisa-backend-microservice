import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CheckHealthEvent } from './events/check-heath.event';
import { GetUserRequest } from './models/get-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleCheckHealth(checkHealthEvent: CheckHealthEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(checkHealthEvent.userId))
      .subscribe((user) => {
        return `User ID ${user.id} ${user.name} checking Ajuda Service health`;
      });
  }
}
