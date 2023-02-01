import { Test, TestingModule } from '@nestjs/testing';
import { ParceiroController } from './parceiro.controller';

describe('ParceiroController', () => {
  let controller: ParceiroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParceiroController],
    }).compile();

    controller = module.get<ParceiroController>(ParceiroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
