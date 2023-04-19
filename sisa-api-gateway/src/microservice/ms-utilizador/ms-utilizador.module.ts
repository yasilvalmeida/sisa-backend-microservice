import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MsUtilizadorController } from './ms-utilizador.controller';
import { MsUtilizadorService } from './ms-utilizador.service';

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
  controllers: [MsUtilizadorController],
  providers: [MsUtilizadorService],
  exports: [MsUtilizadorService],
})
export class MsUtilizadorModule {}
