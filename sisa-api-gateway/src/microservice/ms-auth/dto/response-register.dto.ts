import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class ResponseRegisterDto {
  @ApiProperty({
    description: 'Token de ativação de conta',
  })
  @IsString()
  readonly activationToken: string;

  @ApiProperty({
    description: 'Data de validade do token',
  })
  @IsNumber()
  readonly validade: Date;
}
