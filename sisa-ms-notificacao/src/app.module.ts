import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './module/mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
