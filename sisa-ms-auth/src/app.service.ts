import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      id: '123',
      name: 'John Doe',
    },
    {
      id: '456',
      name: 'Peter Pam',
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
}
