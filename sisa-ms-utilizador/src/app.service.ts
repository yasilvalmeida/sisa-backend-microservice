import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import {
  ICreateUtilizador,
  IError,
  IListaUtilizador,
  ILoginUtilizador,
  IUpdateUtilizador,
  IUtilizador,
} from './interface/utilizador.interface';
import * as bcrypt from 'bcrypt';
import { Acesso, Utilizador } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async findAll(
    limit: number,
    offset: number,
    sortBy: string,
    sortDirection: string,
  ): Promise<IListaUtilizador> {
    const result = await this.prismaService.utilizador.findMany({
      skip: offset ? offset - 1 : 0,
      take: limit ? limit : 10,
      orderBy: [
        {
          [sortBy]: sortDirection,
        },
      ],
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

  async findById(id: number): Promise<IUtilizador> {
    const utilizador = await this.prismaService.utilizador.findFirst({
      where: {
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

  async findByEmail(email: string): Promise<IUtilizador> {
    const utilizador = await this.prismaService.utilizador.findFirst({
      where: {
        email,
      },
    });
    return {
      id: utilizador?.id,
      nome: utilizador?.nome,
      apelido: utilizador?.apelido,
      email: utilizador?.email,
      password: utilizador?.password,
      bloqueado: utilizador?.bloqueado,
      acesso: utilizador?.acesso,
      createdAt: utilizador?.createdAt,
      updatedAt: utilizador?.updatedAt,
    };
  }

  async create(utilizador: ICreateUtilizador): Promise<IUtilizador | IError> {
    try {
      const { email, password } = utilizador;
      const saltOrRounds = 10;
      const key = this.configService.get('PASSWORD_SALT_KEY');
      const salt = await bcrypt.genSalt(saltOrRounds);
      const combinedPassword = password + '.' + key;
      const hash = await bcrypt.hash(combinedPassword, salt);
      const foundUser = await this.findByEmail(email);
      if (foundUser?.id) {
        return { payload: utilizador?.email, message: 'Email duplicado' };
      }
      const result = await this.prismaService.utilizador.create({
        data: {
          ...utilizador,
          password: hash,
        },
      });
      return result as IUtilizador;
    } catch (error) {
      console.log('error', error);
      return { payload: utilizador?.email, message: 'Email duplicado' };
    }
  }

  async update(
    id: number,
    utilizador: IUpdateUtilizador,
  ): Promise<IUtilizador> {
    const { nome, apelido } = utilizador;
    const findUtilizador = await this.findById(id);
    if (
      findUtilizador?.id &&
      !findUtilizador?.bloqueado &&
      !findUtilizador?.eliminado
    ) {
      const result = await this.prismaService.utilizador.update({
        data: {
          nome,
          apelido,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } else {
      return {};
    }
  }

  async remove(id: number): Promise<IUtilizador> {
    const findUtilizador = await this.findById(id);
    if (
      findUtilizador?.id &&
      !findUtilizador?.bloqueado &&
      !findUtilizador?.eliminado
    ) {
      const result = await this.prismaService.utilizador.update({
        data: {
          eliminado: true,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } else {
      return {};
    }
  }

  async toggleBlock(id: number): Promise<IUtilizador> {
    const findUtilizador = await this.findById(id);
    if (findUtilizador?.id && !findUtilizador?.eliminado) {
      const result = await this.prismaService.utilizador.update({
        data: {
          bloqueado: !findUtilizador?.bloqueado,
        },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } else {
      return {};
    }
  }

  async acesso(id: number, acesso: Acesso): Promise<IUtilizador> {
    const findUtilizador = await this.findById(id);
    if (
      findUtilizador?.id &&
      !findUtilizador?.bloqueado &&
      !findUtilizador?.eliminado
    ) {
      const result = await this.prismaService.utilizador.update({
        data: { acesso },
        where: {
          id: parseInt(`${id}`),
        },
      });
      return result as IUtilizador;
    } else {
      return {};
    }
  }

  async login(login: ILoginUtilizador): Promise<IUtilizador | IError> {
    const { email, password } = login;
    const findUtilizador = await this.findByEmail(email);
    if (
      findUtilizador?.id &&
      !findUtilizador?.bloqueado &&
      !findUtilizador?.eliminado
    ) {
      const validPassword = await bcrypt.compare(
        password,
        findUtilizador?.password,
      );
      if (!validPassword)
        return { payload: { password }, message: 'Password not match' };
      return {
        id: findUtilizador?.id,
        nome: findUtilizador?.nome,
        apelido: findUtilizador?.apelido,
        email: findUtilizador?.email,
        acesso: findUtilizador?.acesso,
      };
    } else {
      return {};
    }
  }

  async recoverPassword(email: string): Promise<IUtilizador> {
    const findUtilizador = await this.findByEmail(email);
    if (findUtilizador?.id) {
      return { email };
    }
    return findUtilizador;
  }
}
