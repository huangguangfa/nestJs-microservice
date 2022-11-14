import { Body, Controller, Post } from '@nestjs/common';
import { RoleService } from './role.service';

import { AddRoleDto } from './vo/role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('/list')
  get() {
    return this.roleService.getRoleList();
  }
  @Post('/add')
  add(@Body() roleInfo: AddRoleDto) {
    return this.roleService.add(roleInfo);
  }
}
