import { Field, ID, Int, InputType } from 'type-graphql';
import { VendorCategoryInput } from './VendorCategoryInput';
import { ManyToOne, JoinColumn } from 'typeorm';

@InputType()
export class VendorCategoryItemClassInput {
  @Field(() => ID)
  id: number;

  @Field(() => Int)
  vendorId: number;

  @Field(() => Int)
  vendorCategoryId: number;

  @Field()
  category: string;

  @Field(() => VendorCategoryInput, { nullable: true })
  @ManyToOne(() => VendorCategoryInput)
  @JoinColumn({ name: 'vendorCategoryId' })
  vendorCategory: VendorCategoryInput;
}
