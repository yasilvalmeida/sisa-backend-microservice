import { EstadoToken } from '@prisma/client';

export interface IActivationToken {
  valor: string;
  validade: Date;
}

export interface IMessage {
  message: string;
}

export interface IAccountCheck {
  state: EstadoToken;
}
