import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { Acesso } from '../type/acesso.type';

export class RetrieveUtilizadorDto {
  @ApiProperty({
    description: 'Id do utilizador',
  })
  @IsNumber()
  readonly id: number;

  @ApiProperty({
    description: 'Nome do utilizador',
  })
  @IsString()
  readonly nome: string;

  @ApiProperty({
    description: 'Apelido do utilizador',
  })
  @IsString()
  readonly apelido: string;

  @ApiProperty({
    description: 'Email do utilizador',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description:
      'Bloqueado determina si a conta do utilizador está bloqueada ou não',
  })
  @IsBoolean()
  readonly bloqueado: boolean;

  @ApiProperty({
    description: 'Acesso do utilizador',
    example:
      'Administrador|Validador|Parceiro|UnidadeExecucaoProjeto|Convidado',
  })
  @IsEnum(Acesso)
  readonly acesso: string;

  @ApiProperty({
    description: 'Data de criação do utilizador',
  })
  @IsDate()
  readonly createdAt: Date;

  @ApiProperty({
    description: 'Data de atualização do utilizador',
  })
  @IsDate()
  readonly updatedAt: Date;
}
