import { Field, Int, ObjectType } from 'type-graphql';
import { CreateDateColumn, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany, Entity } from 'typeorm';
import { UserJobCategory } from './UserJobCategory';
import { UserJobStatusEnum } from './Enums';

@ObjectType()
@Entity({ name: 'UserJobs', synchronize: false })
export class UserJob extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  userId: number;

  @Field()
  @Column()
  vendorId: number;

  @Field()
  @Column()
  uuid: string;

  @Field()
  @Column()
  fileType: string;

  @Field()
  @Column('bit', { default: 0 })
  inProgress: boolean;

  @Field(() => UserJobStatusEnum)
  @Column()
  status: UserJobStatusEnum;

  @Field({ nullable: true })
  zipUrl: string;

  @Field(() => Int, { nullable: true })
  zipFileSize: number;

  @Field({ nullable: true })
  @CreateDateColumn()
  created: Date;

  @Field(() => [UserJobCategory], { nullable: true })
  @OneToMany(() => UserJobCategory, UserJobCategory => UserJobCategory.userJob)
  userJobCategories: UserJobCategory[];
}
