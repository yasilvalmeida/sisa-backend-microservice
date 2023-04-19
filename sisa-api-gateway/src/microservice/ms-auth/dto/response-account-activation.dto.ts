import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ResponseAccountActivationDto {
  @ApiProperty({
    description: 'Activation mensagem',
  })
  @IsString()
  readonly message: string;
}
