import { UpdateAcessoDto } from './dto/update-acesso.dt';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateUtilizadorDto } from './dto/create-utilizador.dto';
import { RegisterUtilizadorDto } from './dto/register-utilizador.dto';
import { RetrieveUtilizadorDto } from './dto/retrieve-utilizador.dto';
import { UpdateUtilizadorDto } from './dto/update-utilizador.dto';

@Injectable()
export class MsUtilizadorService {
  constructor(
    @Inject('UTILIZADOR_SERVICE') private readonly client: ClientKafka,
  ) {}

  onModuleInit() {
    const requestPatters = [
      'find-all-utilizador',
      'find-utilizador-by-id',
      'create-utilizador',
      'update-utilizador',
      'remove-utilizador',
      'toggle-block-utilizador',
      'access-utilizador',
      'login-utilizador',
      'reset-password-utilizador',
    ];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  findAll(
    paginationQuery: PaginationQueryDto,
  ): Observable<PaginatedResponseDto<RetrieveUtilizadorDto>> {
    return this.client.send('find-all-utilizador', { paginationQuery });
  }

  findById(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('find-utilizador-by-id', { id });
  }

  create(
    utilizador: RegisterUtilizadorDto | CreateUtilizadorDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.client.send('create-utilizador', { utilizador });
  }

  update(
    id: number,
    utilizador: UpdateUtilizadorDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.client.send('update-utilizador', { id, utilizador });
  }

  remove(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('remove-utilizador', { id });
  }

  toggleBloquear(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('toggle-block-utilizador', { id });
  }

  acesso(
    id: number,
    acesso: UpdateAcessoDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.client.send('access-utilizador', { id, ...acesso });
  }

  login(email: string, password: string): Observable<RetrieveUtilizadorDto> {
    return this.client.send('login-utilizador', { email, password });
  }

  recoverPassword(email: string): Observable<RetrieveUtilizadorDto> {
    return this.client.send('reset-password-utilizador', { email });
  }
}
