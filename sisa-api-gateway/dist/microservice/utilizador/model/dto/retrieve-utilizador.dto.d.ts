import { CreateUtilizadorDto } from './create-utilizador.dto';
export declare enum Acesso {
    Administrador = "Administrador",
    Validador = "Validador",
    Parceiro = "Parceiro",
    UnidadeExecucaoProjeto = "UnidadeExecucaoProjeto"
}
declare const RetrieveUtilizadorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUtilizadorDto>>;
export declare class RetrieveUtilizadorDto extends RetrieveUtilizadorDto_base {
    readonly id: number;
    readonly nome: string;
    readonly apelido: string;
    readonly email: string;
    readonly bloqueado: boolean;
    readonly acesso: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export {};
