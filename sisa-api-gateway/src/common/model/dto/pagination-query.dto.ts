import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  @ApiPropertyOptional({
    description: 'Limite de itens a devolver',
    default: 10,
  })
  limit: number;

  @IsOptional()
  @IsPositive()
  @ApiPropertyOptional({
    description: 'Indice de itens a devolver',
    default: 1,
  })
  offset: number;
}
