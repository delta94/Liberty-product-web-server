import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, Root, Int } from 'type-graphql';
import { Vendor } from './Vendor';
import { UserRole } from './UserRole';

@ObjectType()
@Entity({ name: 'Users', synchronize: false })
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  vendorId?: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field({ complexity: 3 })
  fullName(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Column()
  password: string;

  @Field()
  @Column('bit', { default: 0 })
  active: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  role?: string;

  @Field({ nullable: true, defaultValue: false })
  @Column('bit', { default: 0 })
  alertProductAdded: boolean;

  @Field({ nullable: true, defaultValue: false })
  @Column('bit', { default: 0 })
  alertProductDiscontinued: boolean;

  @Field({ nullable: true, defaultValue: false })
  @Column('bit', { default: 0 })
  alertProductUpdated: boolean;

  @Field({ nullable: true, defaultValue: '' })
  @Column()
  alertEmail: string;

  @Field({ nullable: true })
  @CreateDateColumn()
  created?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  modified?: Date;

  @Field(() => Vendor, { nullable: true })
  @OneToOne(() => Vendor)
  @JoinColumn({ name: 'vendorId' })
  vendor: Vendor;

  @Field(() => [UserRole], { nullable: true })
  @OneToMany(() => UserRole, UserRole => UserRole.user)
  userRoles: UserRole[];
}
