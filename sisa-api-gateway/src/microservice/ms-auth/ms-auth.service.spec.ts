import { Test, TestingModule } from '@nestjs/testing';
import { MsAuthService } from './ms-auth.service';

describe('MsAuthService', () => {
  let service: MsAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MsAuthService],
    }).compile();

    service = module.get<MsAuthService>(MsAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
