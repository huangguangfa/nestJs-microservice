import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  getMenuList() {
    return [
      {
        name: '菜单信息',
      },
    ];
  }
}
