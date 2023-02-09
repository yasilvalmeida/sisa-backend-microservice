import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PaginatedDto } from 'src/common/model/dto/paginated.dto';
import { PaginationQueryDto } from 'src/common/model/dto/pagination-query.dto';
import { CreateUtilizadorDto } from './model/dto/create-utilizador.dto';
import { RetrieveUtilizadorDto } from './model/dto/retrieve-utilizador.dto';
import { UpdateUtilizadorDto } from './model/dto/update-utilizador.dto';
export declare class UtilizadorService {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): void;
    findAll(paginationQuery: PaginationQueryDto): Observable<PaginatedDto<RetrieveUtilizadorDto>>;
    findById(id: number): Observable<RetrieveUtilizadorDto>;
    create(utilizador: CreateUtilizadorDto): Observable<RetrieveUtilizadorDto>;
    update(id: number, utilizador: UpdateUtilizadorDto): Observable<RetrieveUtilizadorDto>;
    remove(id: number): Observable<RetrieveUtilizadorDto>;
    block(id: number): Observable<RetrieveUtilizadorDto>;
    unblock(id: number): Observable<RetrieveUtilizadorDto>;
}
