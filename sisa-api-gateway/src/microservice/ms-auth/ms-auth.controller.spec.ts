import { Test, TestingModule } from '@nestjs/testing';
import { MsAuthController } from './ms-auth.controller';

describe('MsAuthController', () => {
  let controller: MsAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsAuthController],
    }).compile();

    controller = module.get<MsAuthController>(MsAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
