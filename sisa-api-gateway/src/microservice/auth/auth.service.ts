import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UtilizadorDto } from 'src/model/dto/utilizador.dto';
import { Utilizador } from 'src/model/interface/utilizador.interface';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly client: ClientKafka) {}

  onModuleInit() {
    const requestPatters = [
      'find-all-utilizador',
      'find-utilizador',
      'create-utilizador',
      'update-utilizador',
      'delete-utilizador',
      'block-utilizador',
      'unblock-utilizador',
    ];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  findAll(): Observable<Utilizador[]> {
    return this.client.send('find-all-utilizador', {});
  }

  findById(id: number): Observable<Utilizador> {
    return this.client.send('find-utilizador', { id });
  }

  create(ajuda: UtilizadorDto): Observable<Utilizador> {
    return this.client.send('create-utilizador', ajuda);
  }

  update(
    id: number,
    { nome, email, password, acesso, bloqueado }: UtilizadorDto,
  ) {
    const payload = {
      nome,
      email,
      password,
      acesso,
      bloqueado,
    };

    return this.client.emit('update-utilizador', payload);
  }

  remove(id: number) {
    return this.client.emit('delete-utilizador', { id });
  }

  block(id: number) {
    return this.client.emit('block-utilizador', { id });
  }

  unblock(id: number) {
    return this.client.emit('unblock-utilizador', { id });
  }
}
