import { ApiProperty } from '@nestjs/swagger';

export class UtilizadorDto {
  @ApiProperty({
    description: 'ID do utilizador',
  })
  id?: number;
  @ApiProperty({
    description: 'Nome do utilizador',
  })
  nome: string;
  @ApiProperty({
    description: 'Email do utilizador',
  })
  email: string;
  @ApiProperty({
    description: 'Password do utilizador',
  })
  password: string;
  @ApiProperty({
    description:
      'Bloqueado determina si a conta do utilizador está bloqueada ou não',
  })
  bloqueado: boolean;
  @ApiProperty({
    description: 'Acesso do utilizador',
  })
  acesso: number;
}
