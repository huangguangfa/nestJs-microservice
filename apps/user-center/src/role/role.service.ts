import { Injectable, Inject } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Role } from './role.mysql.entity';
import { AddRoleDto } from './role.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject('ROLE_REPOSITORY')
    private roleRepository: MongoRepository<Role>,
  ) {}

  add(role: AddRoleDto) {
    return this.roleRepository.save(role);
  }
  getRoleList() {
    return this.roleRepository.find();
  }
}