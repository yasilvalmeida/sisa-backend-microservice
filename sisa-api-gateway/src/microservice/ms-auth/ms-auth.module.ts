import { MsUtilizadorModule } from './../ms-utilizador/ms-utilizador.module';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MsAuthController } from './ms-auth.controller';
import { MsAuthService } from './ms-auth.service';
import { MsNotificacaoModule } from '../ms-notificacao/ms-notificacao.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ms-auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ms-auth-consumer',
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
    MsUtilizadorModule,
    MsNotificacaoModule,
  ],
  controllers: [MsAuthController],
  providers: [MsAuthService],
  exports: [MsAuthService],
})
export class MsAuthModule {}
