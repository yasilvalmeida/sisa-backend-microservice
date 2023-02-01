import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AjudaController } from './ajuda.controller';
import { AjudaService } from './ajuda.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AJUDA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'ms-ajuda',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'ms-ajuda-consumer',
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
  ],
  controllers: [AjudaController],
  providers: [AjudaService],
})
export class AjudaModule {}
