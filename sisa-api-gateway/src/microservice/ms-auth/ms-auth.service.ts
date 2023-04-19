import { RequestLoginDto } from './dto/request-login.dto';
import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { map, lastValueFrom, Observable } from 'rxjs';
import { ResponseLoginDto } from './dto/response-login.dto';
import { MsUtilizadorService } from '../ms-utilizador/ms-utilizador.service';
import { MsNotificacaoService } from './../ms-notificacao/ms-notificacao.service';
import { ResponseRegisterDto } from './dto/response-register.dto';
import { RegisterUtilizadorDto } from '../ms-utilizador/dto/register-utilizador.dto';
import { ResponseAccountActivationDto } from './dto/response-account-activation.dto';

@Injectable()
export class MsAuthService implements OnModuleInit {
  constructor(
    @Inject('AUTH_SERVICE') private readonly client: ClientKafka,
    @Inject(MsUtilizadorService)
    private readonly msUtilizadorService: MsUtilizadorService,
    @Inject(MsNotificacaoService)
    private readonly msNotificacaoService: MsNotificacaoService,
  ) {}

  onModuleInit() {
    const requestPatters = [
      'create-activation-token',
      'create-reset-password-token',
      'activate-account',
      'check-account',
    ];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  async login(
    loginDto: RequestLoginDto,
  ): Promise<ResponseLoginDto | NotFoundException> {
    const { email, password } = loginDto;
    const { state } = await lastValueFrom(
      this.client.send('check-account', { email }),
    );
    if (state === 'Validado') {
      const loginResult = await lastValueFrom(
        this.msUtilizadorService.login(email, password),
      );
      // Create jwt tomorrow after finsh PLIS tasks
      return { accessToken: '', refreshToken: '', expiresInMinutes: 300 };
    } else {
      throw new NotFoundException('Conta inválida');
    }
  }

  async register(
    utilizador: RegisterUtilizadorDto,
  ): Promise<ResponseRegisterDto | ForbiddenException> {
    const createdUtilizador = await lastValueFrom(
      this.msUtilizadorService.create(utilizador),
    );
    if (createdUtilizador?.id) {
      const { email, nome } = createdUtilizador;
      const token = await lastValueFrom(
        this.client.send('create-activation-token', { email }),
      );
      if (token?.valor) {
        this.msNotificacaoService.sendActivationToken({ email, nome, token });
        const { valor, validade } = token;
        return {
          activationToken: valor,
          validade,
        };
      } else {
        throw new BadRequestException(
          'Sua conta foi criada, mais o token não foi gerado, por favor faça a solicitação de um novo token de activação',
        );
      }
    } else {
      throw new ForbiddenException('Email duplicado');
    }
  }

  async activateAccount(
    token: string,
  ): Promise<
    ResponseAccountActivationDto | ForbiddenException | BadRequestException
  > {
    const { message } = await lastValueFrom(
      this.client.send('activate-account', { token }),
    );
    console.log('result', message);
    return { message };
  }
}
