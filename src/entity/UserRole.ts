import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity({ name: 'UserRoles', synchronize: false })
export class UserRole extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  userId?: number;

  @Field()
  @Column()
  role: string;

  @Field(() => User)
  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
