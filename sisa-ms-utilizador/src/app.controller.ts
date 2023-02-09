import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import {
  IListaUtilizador,
  IUtilizador,
} from './model/interface/utilizador.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('find-all-utilizador')
  async findAll(@Payload() data: any): Promise<IListaUtilizador> {
    const { paginationQuery } = data;
    const { limit, offset } = paginationQuery;
    return this.appService.findAll(limit, offset);
  }

  @MessagePattern('find-utilizador')
  async find(@Payload() data: any): Promise<IUtilizador> {
    const { id } = data;
    return this.appService.find(id);
  }

  @MessagePattern('create-utilizador')
  async create(@Payload() data: any): Promise<IUtilizador> {
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

  @MessagePattern('block-utilizador')
  async block(@Payload() data: any): Promise<IUtilizador> {
    const { id } = data;
    return this.appService.block(id);
  }

  @MessagePattern('unblock-utilizador')
  async unblock(@Payload() data: any): Promise<IUtilizador> {
    const { id } = data;
    return this.appService.unblock(id);
  }
}
