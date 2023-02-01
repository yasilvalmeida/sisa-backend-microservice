import { Test, TestingModule } from '@nestjs/testing';
import { ParceiroService } from './parceiro.service';

describe('ParceiroService', () => {
  let service: ParceiroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParceiroService],
    }).compile();

    service = module.get<ParceiroService>(ParceiroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
