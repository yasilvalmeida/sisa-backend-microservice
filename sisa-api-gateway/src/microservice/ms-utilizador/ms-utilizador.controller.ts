import {
  ApiBody,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { map, Observable } from 'rxjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUtilizadorDto } from './dto/create-utilizador.dto';
import { UpdateUtilizadorDto } from './dto/update-utilizador.dto';
import { RetrieveUtilizadorDto } from './dto/retrieve-utilizador.dto';
import { ApiPaginatedResponse } from 'src/common/response/api-pagineted.response';
import { PaginatedResponseDto } from 'src/common/dto/paginated-response.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { MsUtilizadorService } from './ms-utilizador.service';
import { UpdateAcessoDto } from './dto/update-acesso.dt';
import { RetrieveErrorDto } from './dto/retrieve-error.dto';

@ApiTags('Microservico Utilizador')
@Controller('ms-utilizador')
@ApiExtraModels(PaginatedResponseDto)
export class MsUtilizadorController {
  notFoundMessage =
    'Utilizador não encontrado, provavelmente não existe, eliminado ou bloqueado';
  constructor(private service: MsUtilizadorService) {}

  @Get()
  @ApiPaginatedResponse(RetrieveUtilizadorDto)
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Observable<PaginatedResponseDto<RetrieveUtilizadorDto>> {
    return this.service.findAll(paginationQuery);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Utilizador filtrado por ID.',
    type: RetrieveUtilizadorDto,
  })
  @ApiNotFoundResponse({
    description: 'Utilizador não encontrado por ID.',
    type: RetrieveErrorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findById(
    @Param('id') id: number,
  ): Observable<RetrieveUtilizadorDto | NotFoundException> {
    return this.service.findById(id).pipe(
      map((result: any) => {
        if (!result?.id) {
          throw new NotFoundException(this.notFoundMessage);
        }
        return result;
      }),
    );
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
  @ApiNotFoundResponse({
    description: 'Utilizador não encontrado por ID.',
    type: RetrieveErrorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(
    @Param('id') id: number,
    @Body()
    utilizador: UpdateUtilizadorDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.service.update(id, utilizador).pipe(
      map((result: any) => {
        if (!result?.id) {
          throw new NotFoundException(this.notFoundMessage);
        }
        return result;
      }),
    );
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Utilizador eliminado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiNotFoundResponse({
    description: 'Utilizador não encontrado por ID.',
    type: RetrieveErrorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.remove(id).pipe(
      map((result: any) => {
        if (!result?.id) {
          throw new NotFoundException(this.notFoundMessage);
        }
        return result;
      }),
    );
  }

  @Patch(':id/toogle-bloquear')
  @ApiResponse({
    status: 200,
    description: 'Utilizador bloqueado/desbloqueado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiNotFoundResponse({
    description: 'Utilizador não encontrado por ID.',
    type: RetrieveErrorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  block(@Param('id') id: number): Observable<RetrieveUtilizadorDto> {
    return this.service.toggleBloquear(id).pipe(
      map((result: any) => {
        if (!result?.id) {
          throw new NotFoundException(this.notFoundMessage);
        }
        return result;
      }),
    );
  }

  @Patch(':id/acesso')
  @ApiResponse({
    status: 200,
    description: 'Utilizador acesso trocado com sucesso.',
    type: RetrieveUtilizadorDto,
  })
  @ApiNotFoundResponse({
    description: 'Utilizador não encontrado por ID.',
    type: RetrieveErrorDto,
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  acesso(
    @Param('id') id: number,
    @Body() acesso: UpdateAcessoDto,
  ): Observable<RetrieveUtilizadorDto> {
    return this.service.acesso(id, acesso).pipe(
      map((result: any) => {
        if (!result?.id) {
          throw new NotFoundException(this.notFoundMessage);
        }
        return result;
      }),
    );
  }
}
