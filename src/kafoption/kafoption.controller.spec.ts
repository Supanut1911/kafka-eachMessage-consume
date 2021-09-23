import { Test, TestingModule } from '@nestjs/testing';
import { KafoptionController } from './kafoption.controller';

describe('KafoptionController', () => {
  let controller: KafoptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KafoptionController],
    }).compile();

    controller = module.get<KafoptionController>(KafoptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
