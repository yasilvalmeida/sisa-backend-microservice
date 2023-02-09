import { PaginationQueryDto } from './../../common/model/dto/pagination-query.dto';
import { Observable } from 'rxjs';
import { UtilizadorService } from './utilizador.service';
import { RetrieveUtilizadorDto } from './model/dto/retrieve-utilizador.dto';
import { CreateUtilizadorDto } from './model/dto/create-utilizador.dto';
import { UpdateUtilizadorDto } from './model/dto/update-utilizador.dto';
import { PaginatedDto } from 'src/common/model/dto/paginated.dto';
export declare class UtilizadorController {
    private service;
    constructor(service: UtilizadorService);
    findAll(paginationQuery: PaginationQueryDto): Observable<PaginatedDto<RetrieveUtilizadorDto>>;
    findById(id: number): Observable<RetrieveUtilizadorDto>;
    create(utilizador: CreateUtilizadorDto): Observable<RetrieveUtilizadorDto>;
    update(id: number, utilizador: UpdateUtilizadorDto): Observable<RetrieveUtilizadorDto>;
    remove(id: number): Observable<RetrieveUtilizadorDto>;
    block(id: number): Observable<RetrieveUtilizadorDto>;
    unblock(id: number): Observable<RetrieveUtilizadorDto>;
}
