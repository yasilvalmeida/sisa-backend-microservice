import { RetrieveUtilizadorDto } from './retrieve-utilizador.dto';
import { CreateUtilizadorDto } from './create-utilizador.dto';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RegisterUtilizadorDto extends OmitType(RetrieveUtilizadorDto, [
  'id',
  'bloqueado',
  'acesso',
  'createdAt',
  'updatedAt',
]) {
  @ApiProperty({
    description: 'Password do utilizador',
  })
  @IsString()
  readonly password: string;
}
