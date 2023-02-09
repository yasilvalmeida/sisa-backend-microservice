import { PaginationQueryDto } from './../../common/model/dto/pagination-query.dto';
import {
  ApiBody,
  ApiExtraModels,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { UtilizadorService } from './utilizador.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RetrieveUtilizadorDto } from './model/dto/retrieve-utilizador.dto';
import { CreateUtilizadorDto } from './model/dto/create-utilizador.dto';
import { UpdateUtilizadorDto } from './model/dto/update-utilizador.dto';
import { ApiPaginatedResponse } from 'src/common/response/api-pagineted.response';
import { PaginatedDto } from 'src/common/model/dto/paginated.dto';

@ApiTags('Microservico Utilizador')
@Controller('utilizador')
@ApiExtraModels(PaginatedDto)
export class UtilizadorController {
  constructor(private service: UtilizadorService) {}

  @Get()
  @ApiPaginatedResponse(RetrieveUtilizadorDto)
  findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Observable<PaginatedDto<RetrieveUtilizadorDto>> {
    return this.service.findAll(paginationQuery);
  }

  @Get(':id')
  findById(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.findById(id);
  }

  @Post()
  @ApiBody({ type: CreateUtilizadorDto })
  @ApiResponse({
    status: 201,
    description: 'Novo utilizador criado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(
    @Body() utilizador: CreateUtilizadorDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.service.create(utilizador);
  }

  @Put(':id')
  @ApiBody({ type: UpdateUtilizadorDto })
  @ApiResponse({
    status: 200,
    description: 'Utilizador atualizado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(
    @Param('id') id: number,
    @Body()
    utilizador: UpdateUtilizadorDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.service.update(id, utilizador);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Utilizador eliminado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.remove(id);
  }

  @Patch(':id/bloquear')
  @ApiResponse({
    status: 200,
    description: 'Utilizador eliminado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  block(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.block(id);
  }

  @Patch(':id/desbloquear')
  @ApiResponse({
    status: 200,
    description: 'Utilizador eliminado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  unblock(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.unblock(id);
  }
}
