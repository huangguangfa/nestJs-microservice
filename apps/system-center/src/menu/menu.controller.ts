import { Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { MenuService } from './menu.service';
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/list')
  getList() {
    return this.menuService.getMenuList();
  }
}
