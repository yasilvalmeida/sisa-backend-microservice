import { Test, TestingModule } from '@nestjs/testing';
import { AjudaService } from './ajuda.service';

describe('AjudaService', () => {
  let service: AjudaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AjudaService],
    }).compile();

    service = module.get<AjudaService>(AjudaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
