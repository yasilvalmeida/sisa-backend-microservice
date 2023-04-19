import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export type TSortDirection = 'ascending' | 'descending';

export type TSortByDefault = 'id' | 'createdAt' | 'updatedAt';

export interface IPaginationQueryDto<TSortBy = TSortByDefault> {
  readonly take?: string | number;
  readonly skip?: string | number;
  readonly sortBy?: TSortBy;
  readonly sortDirection?: TSortDirection;
}

export class PaginationQueryDto<TSortBy = TSortByDefault>
  implements IPaginationQueryDto<TSortBy>
{
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

  @ApiPropertyOptional({
    type: String,
    default: 'createdAt',
    description: 'The field to sort the records by',
  })
  @IsOptional()
  @IsString()
  readonly sortBy?: TSortBy;

  @ApiPropertyOptional({
    type: String,
    default: 'asc',
    description: 'The direction to sort the records in',
  })
  @IsOptional()
  @IsString()
  readonly sortDirection?: TSortDirection;
}
