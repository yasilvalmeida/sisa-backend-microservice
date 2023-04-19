import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { suid } from 'rand-token';
import * as dayjs from 'dayjs';
import {
  IAccountCheck,
  IActivationToken,
  IMessage,
} from './interface/auth.interface';
import { EstadoToken, TipoToken } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async createActivationToken(email: string): Promise<IActivationToken> {
    const valor = suid(12);
    const validade = dayjs().add(5, 'day').toDate();
    const tipo = TipoToken.Activacao;
    const token = await this.prismaService.token.create({
      data: {
        email,
        valor,
        validade,
        tipo,
      },
    });
    return { valor: token?.valor, validade: token?.validade };
  }

  async activateAccount(token: string): Promise<IMessage> {
    const foundToken = await this.prismaService.token.findFirst({
      where: {
        valor: token,
        estado: EstadoToken.PorValidar,
      },
    });
    if (foundToken?.id) {
      const today = dayjs();
      const updatedToken = await this.prismaService.token.update({
        data: {
          estado: today.isBefore(foundToken.validade)
            ? EstadoToken.Validado
            : EstadoToken.Rejeitado,
        },
        where: { id: foundToken.id },
      });
      if (updatedToken?.estado === EstadoToken.Rejeitado) {
        return { message: 'Token atingiu o seu tempo de validade' };
      } else {
        return { message: 'Token validado' };
      }
    } else {
      return {
        message: 'Token não encontrado, provavelmente já validado ou rejeitado',
      };
    }
  }

  async checkAccount(email: string): Promise<IAccountCheck> {
    const foundToken = await this.prismaService.token.findFirst({
      where: {
        email,
        estado: EstadoToken.Validado,
      },
      orderBy: [
        {
          validade: 'desc',
        },
      ],
    });
    if (foundToken?.id) {
      return { state: EstadoToken.Validado };
    } else {
      return {
        state: EstadoToken.Rejeitado,
      };
    }
  }
}
