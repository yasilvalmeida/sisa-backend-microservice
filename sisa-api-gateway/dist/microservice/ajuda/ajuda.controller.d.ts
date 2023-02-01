import { Observable } from 'rxjs';
import { AjudaDto } from 'src/model/dto/ajuda.dto';
import { Ajuda } from 'src/model/interface/ajuda.interface';
import { AjudaService } from './ajuda.service';
export declare class AjudaController {
    private service;
    constructor(service: AjudaService);
    findAllAjuda(): Observable<Ajuda[]>;
    find(id: number): Observable<Ajuda>;
    create(ajuda: AjudaDto): Observable<Ajuda>;
    update(id: number, { title }: AjudaDto): Observable<any>;
    remove(id: number): Observable<any>;
    activate(id: number): void;
}
