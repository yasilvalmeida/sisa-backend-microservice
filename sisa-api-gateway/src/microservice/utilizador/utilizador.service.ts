import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PaginatedDto } from 'src/common/model/dto/paginated.dto';
import { PaginationQueryDto } from 'src/common/model/dto/pagination-query.dto';
import { CreateUtilizadorDto } from './model/dto/create-utilizador.dto';
import { RetrieveUtilizadorDto } from './model/dto/retrieve-utilizador.dto';
import { UpdateUtilizadorDto } from './model/dto/update-utilizador.dto';

@Injectable()
export class UtilizadorService {
  constructor(
    @Inject('UTILIZADOR_SERVICE') private readonly client: ClientKafka,
  ) {}

  onModuleInit() {
    const requestPatters = [
      'find-all-utilizador',
      'find-utilizador',
      'create-utilizador',
      'update-utilizador',
      'remove-utilizador',
      'block-utilizador',
      'unblock-utilizador',
    ];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  findAll(
    paginationQuery: PaginationQueryDto,
  ): Observable<PaginatedDto<RetrieveUtilizadorDto>> {
    return this.client.send('find-all-utilizador', { paginationQuery });
  }

  findById(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('find-utilizador', { id });
  }

  create(utilizador: CreateUtilizadorDto): Observable<RetrieveUtilizadorDto> {
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

  block(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('block-utilizador', { id });
  }

  unblock(id: number): Observable<RetrieveUtilizadorDto> {
    return this.client.send('unblock-utilizador', { id });
  }
}
