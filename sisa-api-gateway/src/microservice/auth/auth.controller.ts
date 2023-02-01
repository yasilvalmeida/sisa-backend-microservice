import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UtilizadorDto } from 'src/model/dto/utilizador.dto';
import { Utilizador } from 'src/model/interface/utilizador.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Get()
  findAll(): Observable<Utilizador[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Observable<Utilizador> {
    return this.service.findById(id);
  }

  @Post()
  @ApiBody({ type: UtilizadorDto })
  create(@Body() utilizador: UtilizadorDto): Observable<Utilizador> {
    return this.service.create(utilizador);
  }

  @Put(':id')
  @ApiBody({ type: UtilizadorDto })
  update(
    @Param('id') id: number,
    @Body() { nome, email, password, acesso, bloqueado }: UtilizadorDto,
  ) {
    const payload = {
      nome,
      email,
      password,
      acesso,
      bloqueado,
    };

    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }

  @Patch(':id/bloquear')
  block(@Param('id') id: number) {
    return this.service.block(id);
  }

  @Patch(':id/desbloquear')
  unblock(@Param('id') id: number) {
    return this.service.unblock(id);
  }
}
