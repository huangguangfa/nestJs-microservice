import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id?: number;

  @Column({ default: null })
  name: string;

  @CreateDateColumn({ comment: '创建时间', type: 'datetime' })
  createDate: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updateDate: Date;
}
