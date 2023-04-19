import { IPaginationQuery } from './interface/pagination.interface';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import {
  IAcessoPayload,
  IError,
  IListaUtilizador,
  IUtilizador,
} from './interface/utilizador.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('find-all-utilizador')
  async findAll(@Payload() data: IPaginationQuery): Promise<IListaUtilizador> {
    const { paginationQuery } = data;
    const { limit, offset, sortBy, sortDirection } = paginationQuery;
    return this.appService.findAll(limit, offset, sortBy, sortDirection);
  }

  @MessagePattern('find-utilizador-by-id')
  async findById(@Payload() data: any): Promise<IUtilizador | IError> {
    const { id } = data;
    return this.appService.findById(id);
  }

  @MessagePattern('create-utilizador')
  async create(@Payload() data: any): Promise<IUtilizador | IError> {
    const { utilizador } = data;
    return this.appService.create(utilizador);
  }

  @MessagePattern('update-utilizador')
  async update(@Payload() data: any): Promise<IUtilizador> {
    const { id, utilizador } = data;
    return this.appService.update(id, utilizador);
  }

  @MessagePattern('remove-utilizador')
  async remove(@Payload() data: any): Promise<IUtilizador> {
    const { id } = data;
    return this.appService.remove(id);
  }

  @MessagePattern('toggle-block-utilizador')
  async toggleBlock(@Payload() data: any): Promise<IUtilizador> {
    const { id } = data;
    return this.appService.toggleBlock(id);
  }

  @MessagePattern('access-utilizador')
  async acesso(@Payload() data: IAcessoPayload): Promise<IUtilizador | IError> {
    const { id, acesso } = data;
    return this.appService.acesso(id, acesso);
  }

  @MessagePattern('login-utilizador')
  async login(@Payload() data: any): Promise<IUtilizador | IError> {
    const { email, password } = data;
    return this.appService.login({ email, password });
  }

  @MessagePattern('reset-password-utilizador')
  async resetPassword(@Payload() data: any): Promise<IUtilizador> {
    const { email } = data;
    return this.appService.recoverPassword(email);
  }
}
