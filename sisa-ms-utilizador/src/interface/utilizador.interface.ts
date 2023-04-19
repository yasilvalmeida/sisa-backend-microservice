import { Acesso } from '@prisma/client';

export interface IUtilizador {
  id?: number;
  nome?: string;
  apelido?: string;
  email?: string;
  password?: string;
  bloqueado?: boolean;
  eliminado?: boolean;
  acesso?: Acesso;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IListaUtilizador {
  total: number;
  limit: number;
  offset: number;
  results: IUtilizador[];
}

export interface ILoginUtilizador {
  email: string;
  password: string;
}

export interface IRegisterUtilizador extends ILoginUtilizador {
  nome: string;
  apelido: string;
}

export interface ICreateUtilizador extends IRegisterUtilizador {
  acesso: Acesso;
}

export interface IUpdateUtilizador {
  nome: string;
  apelido: string;
}

export interface IError {
  payload: any;
  message: string;
}

export interface IAcessoPayload {
  id: number;
  acesso: Acesso;
}
