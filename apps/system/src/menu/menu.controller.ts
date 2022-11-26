import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @MessagePattern({ cmd: 'getList' })
  getList() {
    return JSON.stringify({
      name: '1',
    });
  }
}
