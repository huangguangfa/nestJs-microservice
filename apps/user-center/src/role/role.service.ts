import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role } from './entity/role.mysql.entity';
import { AddRoleDto } from './vo/role.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: Repository<Role>,
  ) {}

  add(roleInfo: AddRoleDto) {
    return this.roleRepository.save(roleInfo);
  }
  getRoleList() {
    return this.roleRepository.find();
  }
}
