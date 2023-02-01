import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParceiroModule } from './microservice/parceiro/parceiro.module';
import { AuthModule } from './microservice/auth/auth.module';
import { AjudaModule } from './microservice/ajuda/ajuda.module';
import { NotificacaoModule } from './microservice/notificacao/notificacao.module';

@Module({
  imports: [ParceiroModule, AuthModule, AjudaModule, NotificacaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
