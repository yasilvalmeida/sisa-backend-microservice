import { RequestSendMessageDto } from './dto/request-send-message.dto';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class MsNotificacaoService implements OnModuleInit {
  constructor(
    @Inject('NOTIFICACAO_SERVICE') private readonly client: ClientKafka,
  ) {}

  onModuleInit() {
    const requestPatters = ['send-activation-token'];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  sendActivationToken(payload: RequestSendMessageDto) {
    const { email, nome, token } = payload;
    return this.client.send('send-activation-token', {
      email,
      nome,
      token,
    });
  }
}
