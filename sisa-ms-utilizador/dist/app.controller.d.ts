import { AppService } from './app.service';
import { IListaUtilizador, IUtilizador } from './model/interface/utilizador.interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    findAll(data: any): Promise<IListaUtilizador>;
    find(data: any): Promise<IUtilizador>;
    create(data: any): Promise<IUtilizador>;
    update(data: any): Promise<IUtilizador>;
    remove(data: any): Promise<IUtilizador>;
    block(data: any): Promise<IUtilizador>;
    unblock(data: any): Promise<IUtilizador>;
}
