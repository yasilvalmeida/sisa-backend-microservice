import { Test, TestingModule } from '@nestjs/testing';
import { NotificacaoController } from './notificacao.controller';

describe('NotificacaoController', () => {
  let controller: NotificacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificacaoController],
    }).compile();

    controller = module.get<NotificacaoController>(NotificacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
