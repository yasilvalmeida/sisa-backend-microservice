import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UtilizadorController } from './utilizador.controller';
import { UtilizadorService } from './utilizador.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'UTILIZADOR_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ms-utilizador',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ms-utilizador-consumer',
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  controllers: [UtilizadorController],
  providers: [UtilizadorService],
})
export class UtilizadorModule {}
