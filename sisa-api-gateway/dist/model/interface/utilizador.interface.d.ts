export interface Utilizador {
    id?: number;
    nome: string;
    email: string;
    password: string;
    bloqueado: boolean;
    acesso: number;
}
