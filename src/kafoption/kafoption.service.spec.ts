import { Test, TestingModule } from '@nestjs/testing';
import { KafoptionService } from './kafoption.service';

describe('KafoptionService', () => {
  let service: KafoptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KafoptionService],
    }).compile();

    service = module.get<KafoptionService>(KafoptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
