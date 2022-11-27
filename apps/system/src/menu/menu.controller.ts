import { MessagePattern } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller()
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @MessagePattern({ cmd: 'menu' })
  getList() {
    return this.menuService.getMenuList();
  }
}
