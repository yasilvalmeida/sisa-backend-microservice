export interface IUtilizador {
    id?: number;
    nome?: string;
    apelido?: string;
    email: string;
    password: string;
    bloqueado?: boolean;
    acesso: number;
}
