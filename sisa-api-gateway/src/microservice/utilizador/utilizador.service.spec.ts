import { Test, TestingModule } from '@nestjs/testing';
import { UtilizadorService } from './utilizador.service';

describe('UtilizadorService', () => {
  let service: UtilizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilizadorService],
    }).compile();

    service = module.get<UtilizadorService>(UtilizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
