import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './common/validation/env.validation';
import { MsAuthModule } from './microservice/ms-auth/ms-auth.module';
import { MsUtilizadorModule } from './microservice/ms-utilizador/ms-utilizador.module';
import { MsNotificacaoModule } from './microservice/ms-notificacao/ms-notificacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    MsAuthModule,
    MsUtilizadorModule,
    MsNotificacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
