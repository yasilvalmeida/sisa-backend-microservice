import { ClientKafka } from '@nestjs/microservices';
import { OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Ajuda } from 'src/model/interface/ajuda.interface';
import { AjudaDto } from 'src/model/dto/ajuda.dto';
export declare class AjudaService implements OnModuleInit {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): void;
    findAllAjuda(): Observable<Ajuda[]>;
    findAjuda(id: number): Observable<Ajuda>;
    create(ajuda: AjudaDto): Observable<Ajuda>;
    update(id: number, { title }: AjudaDto): Observable<any>;
    remove(id: number): Observable<any>;
}
