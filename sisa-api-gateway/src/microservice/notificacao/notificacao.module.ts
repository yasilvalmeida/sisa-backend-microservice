import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NotificacaoController } from './notificacao.controller';
import { NotificacaoService } from './notificacao.service';

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
  controllers: [NotificacaoController],
  providers: [NotificacaoService],
})
export class NotificacaoModule {}
