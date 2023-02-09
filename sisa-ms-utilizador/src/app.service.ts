import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import {
  IListaUtilizador,
  IUtilizador,
} from './model/interface/utilizador.interface';
import * as bcrypt from 'bcrypt';
import { Utilizador } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(limit: number, offset: number): Promise<IListaUtilizador> {
    const result = await this.prismaService.utilizador.findMany({
      where: {
        bloqueado: false,
        eliminado: false,
      },
      skip: offset ? offset - 1 : 0,
      take: limit ? limit : 10,
    });
    const transformed: IUtilizador[] = result?.map((utilizador: Utilizador) => {
      return {
        id: utilizador?.id,
        nome: utilizador?.nome,
        apelido: utilizador?.apelido,
        email: utilizador?.email,
        bloqueado: utilizador?.bloqueado,
        acesso: utilizador?.acesso,
        createdAt: utilizador?.createdAt,
        updatedAt: utilizador?.updatedAt,
      };
    });
    return { total: transformed?.length, limit, offset, results: transformed };
  }

  async find(id: number): Promise<IUtilizador> {
    const utilizador = await this.prismaService.utilizador.findFirst({
      where: {
        bloqueado: false,
        eliminado: false,
        id: {
          equals: parseInt(`${id}`),
        },
      },
    });
    return {
      id: utilizador?.id,
      nome: utilizador?.nome,
      apelido: utilizador?.apelido,
      email: utilizador?.email,
      bloqueado: utilizador?.bloqueado,
      acesso: utilizador?.acesso,
      createdAt: utilizador?.createdAt,
      updatedAt: utilizador?.updatedAt,
    };
  }

  async create(utilizador: IUtilizador): Promise<IUtilizador> {
    const { password } = utilizador;
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    const result = await this.prismaService.utilizador.create({
      data: {
        ...utilizador,
        password: hash,
      },
    });
    return result as IUtilizador;
  }

  async update(id: number, utilizador: IUtilizador): Promise<IUtilizador> {
    try {
      const { nome, apelido, email, password, acesso } = utilizador;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      const result = await this.prismaService.utilizador.update({
        data: {
          nome,
          apelido,
          email,
          password: hash,
          acesso,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: number): Promise<IUtilizador> {
    try {
      const result = await this.prismaService.utilizador.update({
        data: {
          eliminado: true,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } catch (error) {
      throw error;
    }
  }

  async block(id: number): Promise<IUtilizador> {
    try {
      const result = await this.prismaService.utilizador.update({
        data: {
          bloqueado: true,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } catch (error) {
      throw error;
    }
  }

  async unblock(id: number): Promise<IUtilizador> {
    try {
      const result = await this.prismaService.utilizador.update({
        data: {
          bloqueado: false,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } catch (error) {
      throw error;
    }
  }
}
