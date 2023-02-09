import { Acesso } from '@prisma/client';

export interface IUtilizador {
  id?: number;
  nome: string;
  apelido: string;
  email: string;
  password?: string;
  bloqueado: boolean;
  acesso: Acesso;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IListaUtilizador {
  total: number;
  limit: number;
  offset: number;
  results: IUtilizador[];
}
