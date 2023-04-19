import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class ResponseLoginDto {
  @ApiProperty({
    description: 'Access token',
  })
  @IsString()
  readonly accessToken: string;

  @ApiProperty({
    description: 'Refresh token',
  })
  @IsString()
  readonly refreshToken: string;

  @ApiProperty({
    description: 'Expires in minutes',
  })
  @IsNumber()
  readonly expiresInMinutes: number;
}
