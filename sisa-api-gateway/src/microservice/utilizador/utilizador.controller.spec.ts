import { Test, TestingModule } from '@nestjs/testing';
import { UtilizadorController } from './utilizador.controller';

describe('UtilizadorController', () => {
  let controller: UtilizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtilizadorController],
    }).compile();

    controller = module.get<UtilizadorController>(UtilizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
