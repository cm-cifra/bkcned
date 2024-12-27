import { Test, TestingModule } from '@nestjs/testing';
import { UserTypeMenuController } from './user_type_menu.controller';

describe('UserTypeMenuController', () => {
  let controller: UserTypeMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTypeMenuController],
    }).compile();

    controller = module.get<UserTypeMenuController>(UserTypeMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
