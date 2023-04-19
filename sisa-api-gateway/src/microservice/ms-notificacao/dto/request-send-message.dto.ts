import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RequestSendMessageDto {
  @ApiProperty({
    description: 'Email do utilizador',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: 'Nome do utilizador',
  })
  @IsString()
  readonly nome: string;

  @ApiProperty({
    description: 'Token de ativação',
  })
  @IsString()
  readonly token: string;
}
