import { Test, TestingModule } from '@nestjs/testing';
import { AjudaController } from './ajuda.controller';

describe('AjudaController', () => {
  let controller: AjudaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AjudaController],
    }).compile();

    controller = module.get<AjudaController>(AjudaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
