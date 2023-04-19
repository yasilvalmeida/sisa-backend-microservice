import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDto<TData> {
  @ApiProperty({
    description: 'Total de itens',
  })
  total: number;

  @ApiProperty({
    description: 'Limite de itens devolvidos',
  })
  limit: number;

  @ApiProperty({
    description: 'Indice de itens devolvidos',
  })
  offset: number;

  @ApiProperty({
    description: 'Lista de itens',
  })
  results: TData[];
}
