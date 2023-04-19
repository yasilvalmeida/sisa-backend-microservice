import { Test, TestingModule } from '@nestjs/testing';
import { MsUtilizadorService } from './ms-utilizador.service';

describe('MsUtilizadorService', () => {
  let service: MsUtilizadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsUtilizadorService],
    }).compile();

    service = module.get<MsUtilizadorService>(MsUtilizadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
