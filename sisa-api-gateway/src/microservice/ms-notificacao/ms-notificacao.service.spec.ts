import { Test, TestingModule } from '@nestjs/testing';
import { MsNotificacaoService } from './ms-notificacao.service';

describe('MsNotificacaoService', () => {
  let service: MsNotificacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsNotificacaoService],
    }).compile();

    service = module.get<MsNotificacaoService>(MsNotificacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
