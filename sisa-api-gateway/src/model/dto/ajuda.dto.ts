import { ApiProperty } from '@nestjs/swagger';

export class AjudaDto {
  @ApiProperty({
    description: 'Título da ajuda ao desenvolvimento',
  })
  title: string;
}
