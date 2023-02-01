import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ParceiroController } from './parceiro.controller';
import { ParceiroService } from './parceiro.service';

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
  controllers: [ParceiroController],
  providers: [ParceiroService],
})
export class ParceiroModule {}
