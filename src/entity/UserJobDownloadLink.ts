import { Field, Int, ObjectType } from 'type-graphql';
import { CreateDateColumn, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { UserJob } from './UserJob';

@ObjectType()
@Entity({ name: 'UserJobDownloadLinks', synchronize: false })
export class UserJobDownloadLink extends BaseEntity {
  @Field(() => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id?: number;

  @Field(() => Int)
  @Column()
  userJobId: number;

  @Field()
  @Column()
  category: string;

  @Field()
  @Column()
  categoryDisplayText: string;

  @Field()
  @Column()
  downloadUrl: string;

  @Field()
  @Column()
  fileSize: string;

  @Field()
  @Column()
  notifyEmail: string;

  @Field({ nullable: true })
  @CreateDateColumn({ default: new Date() })
  created: Date;

  @Field(() => UserJob, { nullable: true })
  @ManyToOne(() => UserJob)
  // @JoinColumn({ name: 'userJobId' })
  userJob: string[];
}
