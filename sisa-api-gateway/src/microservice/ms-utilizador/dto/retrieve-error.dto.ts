import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RetrieveErrorDto {
  @ApiProperty({
    description: 'Payload usado na request',
  })
  @IsString()
  readonly payload: any;

  @ApiProperty({
    description: 'Mensagem de erro',
  })
  @IsString()
  readonly message: string;
}
