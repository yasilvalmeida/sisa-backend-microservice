import { CreateUtilizadorDto } from './create-utilizador.dto';
declare const UpdateUtilizadorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUtilizadorDto>>;
export declare class UpdateUtilizadorDto extends UpdateUtilizadorDto_base {
    readonly nome: string;
    readonly apelido: string;
    readonly email: string;
    readonly password: string;
    readonly bloqueado: boolean;
    readonly acesso: string;
}
export {};
