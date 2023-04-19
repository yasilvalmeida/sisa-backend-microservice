import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class RequestLoginDto {
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
    message:
      'password fraca, deves colocar maiuscula, minuscula, número e carater especial',
  })
  readonly password: string;
}
