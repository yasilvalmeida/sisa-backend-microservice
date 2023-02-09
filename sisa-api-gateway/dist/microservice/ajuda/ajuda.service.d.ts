import { ClientKafka } from '@nestjs/microservices';
import { OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Ajuda } from 'src/common/model/interface/ajuda.interface';
export declare class AjudaService implements OnModuleInit {
    private readonly client;
    constructor(client: ClientKafka);
    onModuleInit(): void;
    findAllAjuda(): Observable<Ajuda[]>;
    findAjuda(id: number): Observable<Ajuda>;
    create(ajuda: any): Observable<Ajuda>;
    update(id: number, { title }: any): Observable<any>;
    remove(id: number): Observable<any>;
}
