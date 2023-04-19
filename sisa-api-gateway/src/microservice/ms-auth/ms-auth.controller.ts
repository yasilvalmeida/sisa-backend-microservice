import { ResponseAccountActivationDto } from './dto/response-account-activation.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Observable } from 'rxjs';
import {
  Body,
  Controller,
  Post,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
  Get,
  Query,
} from '@nestjs/common';
import { MsAuthService } from './ms-auth.service';
import { RequestLoginDto } from './dto/request-login.dto';
import { ResponseLoginDto } from './dto/response-login.dto';
import { ResponseRegisterDto } from './dto/response-register.dto';
import { RegisterUtilizadorDto } from '../ms-utilizador/dto/register-utilizador.dto';

@ApiTags('Microservico Autenticacao')
@Controller('ms-auth')
export class MsAuthController {
  constructor(private service: MsAuthService) {}

  @Post('/login')
  @ApiBody({ type: RequestLoginDto })
  @ApiResponse({
    status: 200,
    description: 'Login com sucesso.',
    type: ResponseLoginDto,
  })
  @ApiResponse({ status: 404, description: 'Not found.' })
  login(
    @Body() loginData: RequestLoginDto,
  ): Promise<ResponseLoginDto | NotFoundException> {
    return this.service.login(loginData);
  }

  @Post('/register')
  @ApiBody({ type: RegisterUtilizadorDto })
  @ApiResponse({
    status: 200,
    description: 'Registo com sucesso.',
    type: ResponseRegisterDto,
  })
  @ApiForbiddenResponse({ description: 'Email duplicado' })
  register(
    @Body() utilizador: RegisterUtilizadorDto,
  ): Promise<ResponseRegisterDto | ForbiddenException> {
    return this.service.register(utilizador);
  }

  @Get('/activate-account')
  @ApiResponse({
    status: 200,
    description: 'Utilizador conta activa.',
    type: ResponseAccountActivationDto,
  })
  @ApiNotFoundResponse({
    description: 'Utilizador ou token não encontrado.',
  })
  @ApiBadRequestResponse({
    description: 'Token inválido.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  activateAccount(
    @Query('token') token: string,
  ): Promise<
    ResponseAccountActivationDto | ForbiddenException | BadRequestException
  > {
    return this.service.activateAccount(token);
  }
}
