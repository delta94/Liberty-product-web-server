import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { UserJobCategory } from './UserJobCategory';

@ObjectType()
@Entity({ name: 'UserJobCategoryItemClasses', synchronize: false })
export class UserJobCategoryItemClass extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field()
  @Column()
  userJobId: number;

  @Field()
  @Column()
  userJobCategoryId: number;

  @Field()
  @Column()
  itemClass: string;

  @Field()
  @Column()
  itemClassDescription: string;

  @Field(() => UserJobCategory, { nullable: true })
  @ManyToOne(() => UserJobCategory)
  // @JoinColumn({ name: 'userJobCategoryId' })
  userJobCategory: UserJobCategory[];
}
