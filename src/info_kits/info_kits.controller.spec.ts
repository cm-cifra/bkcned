import { Test, TestingModule } from '@nestjs/testing';
import { InfoKitsController } from './info_kits.controller';

describe('InfoKitsController', () => {
  let controller: InfoKitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoKitsController],
    }).compile();

    controller = module.get<InfoKitsController>(InfoKitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
