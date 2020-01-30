import { ObjectType, Field } from 'type-graphql';
import { Svc00701 } from '../Svc00701';
import { Svc00712 } from '../Svc00712';
import { Svc00731 } from '../Svc00731';

@ObjectType()
export class UpdateQuantityItem {
  @Field(() => Svc00701)
  svc00701: Svc00701;

  @Field(() => Svc00712)
  svc00712: Svc00712;

  @Field(() => Svc00731)
  svc00731: Svc00731;

  constructor(svc00701: Svc00701, svc00712: Svc00712, svc00731: Svc00731) {
    this.svc00701 = svc00701;
    this.svc00712 = svc00712;
    this.svc00731 = svc00731;
  }
}
