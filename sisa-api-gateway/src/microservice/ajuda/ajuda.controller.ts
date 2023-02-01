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
import { AjudaDto } from 'src/model/dto/ajuda.dto';
import { Ajuda } from 'src/model/interface/ajuda.interface';
import { AjudaService } from './ajuda.service';

@Controller('ajuda')
export class AjudaController {
  constructor(private service: AjudaService) {}
  @Get()
  findAllAjuda(): Observable<Ajuda[]> {
    return this.service.findAllAjuda();
  }

  @Get(':id')
  find(@Param('id') id: number): Observable<Ajuda> {
    return this.service.findAjuda(id);
  }

  @Post()
  @ApiBody({ type: AjudaDto })
  create(@Body() ajuda: AjudaDto): Observable<Ajuda> {
    return this.service.create(ajuda);
  }

  @Put(':id')
  @ApiBody({ type: AjudaDto })
  update(@Param('id') id: number, @Body() { title }: AjudaDto) {
    const payload = {
      id,
      title,
    };

    return this.service.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }

  @Patch(':id/activate')
  activate(@Param('id') id: number) {
    /* return this.client.emit('activate-user', { id }); */
  }
}
