import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddRoleDto {
  @ApiProperty({ example: '测试角色名称' })
  @IsNotEmpty()
  name: string;
}
