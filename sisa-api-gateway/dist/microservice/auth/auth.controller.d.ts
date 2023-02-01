import { Observable } from 'rxjs';
import { UtilizadorDto } from 'src/model/dto/utilizador.dto';
import { Utilizador } from 'src/model/interface/utilizador.interface';
import { AuthService } from './auth.service';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    findAll(): Observable<Utilizador[]>;
    findById(id: number): Observable<Utilizador>;
    create(utilizador: UtilizadorDto): Observable<Utilizador>;
    update(id: number, { nome, email, password, acesso, bloqueado }: UtilizadorDto): Observable<any>;
    remove(id: number): Observable<any>;
    block(id: number): Observable<any>;
    unblock(id: number): Observable<any>;
}
