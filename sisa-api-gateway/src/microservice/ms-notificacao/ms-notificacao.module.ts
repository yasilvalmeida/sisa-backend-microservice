import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MsNotificacaoService } from './ms-notificacao.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICACAO_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ms-notificacao',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ms-notificacao-consumer',
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  providers: [MsNotificacaoService],
  exports: [MsNotificacaoService],
})
export class MsNotificacaoModule {}
