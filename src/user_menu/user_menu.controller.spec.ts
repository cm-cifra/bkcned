import { Test, TestingModule } from '@nestjs/testing';
import { UserMenuController } from './user_menu.controller';

describe('UserMenuController', () => {
  let controller: UserMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMenuController],
    }).compile();

    controller = module.get<UserMenuController>(UserMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
