import { PrismaService } from './database/prisma.service';
import { IListaUtilizador, IUtilizador } from './model/interface/utilizador.interface';
export declare class AppService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(limit: number, offset: number): Promise<IListaUtilizador>;
    find(id: number): Promise<IUtilizador>;
    create(utilizador: IUtilizador): Promise<IUtilizador>;
    update(id: number, utilizador: IUtilizador): Promise<IUtilizador>;
    remove(id: number): Promise<IUtilizador>;
    block(id: number): Promise<IUtilizador>;
    unblock(id: number): Promise<IUtilizador>;
}
