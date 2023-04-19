import { RetrieveUtilizadorDto } from './retrieve-utilizador.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUtilizadorDto extends OmitType(RetrieveUtilizadorDto, [
  'id',
  'bloqueado',
  'createdAt',
  'updatedAt',
]) {
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
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  readonly password: string;

  @ApiProperty({
    description: 'Acesso do utilizador',
    example:
      'Administrador|Validador|Parceiro|UnidadeExecucaoProjeto|Convidado',
  })
  @IsString()
  readonly acesso: string;
}
