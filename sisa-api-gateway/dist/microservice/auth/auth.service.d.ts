import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UtilizadorDto } from 'src/model/dto/utilizador.dto';
import { Utilizador } from 'src/model/interface/utilizador.interface';
export declare class AuthService {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): void;
    findAll(): Observable<Utilizador[]>;
    findById(id: number): Observable<Utilizador>;
    create(ajuda: UtilizadorDto): Observable<Utilizador>;
    update(id: number, { nome, email, password, acesso, bloqueado }: UtilizadorDto): Observable<any>;
    remove(id: number): Observable<any>;
    block(id: number): Observable<any>;
    unblock(id: number): Observable<any>;
}
