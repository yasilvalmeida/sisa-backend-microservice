import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { CreateUtilizadorDto } from './create-utilizador.dto';

export class UpdateUtilizadorDto extends PartialType(CreateUtilizadorDto) {
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
    description: 'Password do utilizador',
  })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description:
      'Bloqueado determina si a conta do utilizador está bloqueada ou não',
    example: false,
  })
  @IsBoolean()
  readonly bloqueado: boolean;

  @ApiProperty({
    description: 'Acesso do utilizador',
    example: 'Administrador|Validador|Parceiro|UnidadeExecucaoProjeto',
  })
  @IsString()
  readonly acesso: string;
}
