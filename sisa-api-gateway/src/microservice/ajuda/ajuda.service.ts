import { ClientKafka } from '@nestjs/microservices';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Ajuda } from 'src/model/interface/ajuda.interface';
import { AjudaDto } from 'src/model/dto/ajuda.dto';

@Injectable()
export class AjudaService implements OnModuleInit {
  constructor(@Inject('AJUDA_SERVICE') private readonly client: ClientKafka) {}

  onModuleInit() {
    const requestPatters = [
      'find-all-ajuda',
      'find-ajuda',
      'create-ajuda',
      'update-ajuda',
      'delete-ajuda',
    ];

    requestPatters.forEach(async (pattern) => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }

  findAllAjuda(): Observable<Ajuda[]> {
    return this.client.send('find-all-ajuda', {});
  }

  findAjuda(id: number): Observable<Ajuda> {
    return this.client.send('find-ajuda', { id });
  }

  create(ajuda: AjudaDto): Observable<Ajuda> {
    return this.client.send('create-ajuda', ajuda);
  }

  update(id: number, { title }: AjudaDto) {
    const payload = {
      id,
      title,
    };

    return this.client.emit('update-ajuda', payload);
  }

  remove(id: number) {
    return this.client.emit('delete-ajuda', { id });
  }
}
