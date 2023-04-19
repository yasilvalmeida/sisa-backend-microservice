import { Test, TestingModule } from '@nestjs/testing';
import { MsUtilizadorController } from './ms-utilizador.controller';

describe('MsUtilizadorController', () => {
  let controller: MsUtilizadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MsUtilizadorController],
    }).compile();

    controller = module.get<MsUtilizadorController>(MsUtilizadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
