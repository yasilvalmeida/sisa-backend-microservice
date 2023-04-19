import { RetrieveUtilizadorDto } from './retrieve-utilizador.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdateAcessoDto extends OmitType(RetrieveUtilizadorDto, [
  'id',
  'nome',
  'apelido',
  'email',
  'bloqueado',
  'createdAt',
  'updatedAt',
]) {}
