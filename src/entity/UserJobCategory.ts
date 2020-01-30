import { Field, Int, ObjectType } from 'type-graphql';
import { CreateDateColumn, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity, JoinColumn } from 'typeorm';
import { UserJob } from './UserJob';
import { UserJobCategoryItemClass } from './UserJobCategoryItemClass';

@ObjectType()
@Entity({ name: 'UserJobCategories', synchronize: false })
export class UserJobCategory extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Int)
  @Column()
  userJobId: number;

  @Field()
  @Column()
  category: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  filePath: string;

  @Field()
  @Column('bit', { default: 0 })
  downloaded: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  available: Date;

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true })
  created: Date;

  @Field(() => UserJob)
  @ManyToOne(() => UserJob)
  @JoinColumn({ name: 'userJobId' })
  userJob: string[];

  @Field(() => [UserJobCategoryItemClass], { nullable: true })
  @OneToMany(() => UserJobCategoryItemClass, UserJobCategoryItemClass => UserJobCategoryItemClass.userJobCategory)
  userJobCategoryItemClasses: UserJobCategoryItemClass[];
}
