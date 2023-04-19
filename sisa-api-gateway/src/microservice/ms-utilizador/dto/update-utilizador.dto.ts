import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUtilizadorDto } from './create-utilizador.dto';

export class UpdateUtilizadorDto extends OmitType(CreateUtilizadorDto, [
  'email',
  'password',
  'acesso',
]) {
  /* @ApiProperty({
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
  readonly email: string; */
  /*  @ApiProperty({
    description: 'Password do utilizador',
  })
  @IsString()
  readonly password: string; */
  /* @ApiProperty({
    description: 'Acesso do utilizador',
    example: 'Administrador|Validador|Parceiro|UnidadeExecucaoProjeto',
  })
  @IsString()
  readonly acesso: string; */
}
