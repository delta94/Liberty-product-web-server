import { ObjectType, Field, Float } from 'type-graphql';
import { SalesPresentationItemClass } from './SalesPresentationItemClass';
import { Column } from 'typeorm';
import { ItemClassData } from './ItemClassData';
import { SalesPresentationItemClassImageItem } from './SalesPresentationItemClassImageItem';
import { SalesPresentation } from './SalesPresentation';
import { SalesPresentationItemClassKit } from './SalesPresentationItemClassKit';
import { SalesPresentationItemClassGroup } from './SalesPresentationItemClassGroup';

@ObjectType()
export class PresentationPdfItemClass {
  @Field(() => SalesPresentationItemClass)
  itemClass: SalesPresentationItemClass;

  @Field(() => ItemClassData)
  itemClassFeatures: ItemClassData;

  @Field(() => [SalesPresentationPdfKitRows], { nullable: true })
  itemClassKits: SalesPresentationPdfKitRows[];

  @Field(() => [SalesPresentationPdfRows], { nullable: true })
  itemClassItemNumbers: SalesPresentationPdfRows[];

  @Field(() => [SalesPresentationPdfRows], { nullable: true })
  itemClassGroups: SalesPresentationPdfRows[];

  @Field(() => [SalesPresentationItemClassImageItem], { nullable: true })
  itemClassImages: SalesPresentationItemClassImageItem[];
}

@ObjectType()
export class SalesPresentationPdfData {
  @Field(() => SalesPresentation)
  @Column()
  presentation: SalesPresentation;

  @Field(() => [PresentationPdfItemClass], { nullable: true })
  @Column()
  items: PresentationPdfItemClass[];
}

@ObjectType()
export class SalesPresentationPdfKitRows {
  @Field(() => String, { nullable: true })
  @Column()
  itemNumber: string;

  @Field(() => String, { nullable: true })
  @Column()
  itemDescription: string;

  @Field(() => [SalesPresentationPdfRows], { nullable: true })
  @Column()
  items: SalesPresentationPdfRows[];
}

@ObjectType()
export class SalesPresentationPdfItemNumberRows {
  @Field(() => String, { nullable: true })
  @Column()
  itemNumber: string;

  @Field(() => String, { nullable: true })
  @Column()
  itemDescription: string;

  @Field(() => [SalesPresentationPdfRows], { nullable: true })
  @Column()
  items: SalesPresentationPdfRows[];
}

@ObjectType()
export class SalesPresentationPdfGroupRows {
  @Field(() => String, { nullable: true })
  @Column()
  itemNumber: string;

  @Field(() => String, { nullable: true })
  @Column()
  itemDescription: string;

  @Field(() => [SalesPresentationPdfRows], { nullable: true })
  @Column()
  items: SalesPresentationPdfRows[];
}

@ObjectType()
export class SalesPresentationPdfRows {
  static fromKit(data: SalesPresentationItemClassKit): SalesPresentationPdfRows {
    let item: SalesPresentationPdfRows = new SalesPresentationPdfRows();
    const { hasId, save, remove, reload, ...rest } = data;
    item = Object.assign(new SalesPresentationPdfRows(), { ...rest });
    return item;
  }

  static fromGroup(data: SalesPresentationItemClassGroup): SalesPresentationPdfRows {
    let item: SalesPresentationPdfRows = new SalesPresentationPdfRows();
    const { hasId, save, remove, reload, ...rest } = data;
    item = Object.assign(new SalesPresentationPdfRows(), { ...rest });
    item.itemNumber = data.kitItem;
    item.itemDescription = data.kitDescription;
    item.cubes = data.cubes;
    return item;
  }

  @Field(() => String, { nullable: true })
  @Column()
  itemNumber: string;

  @Field(() => String, { nullable: true })
  @Column()
  itemDescription: string;

  @Field(() => String, { nullable: true })
  @Column()
  dimensions?: string;

  @Field(() => Float)
  @Column()
  cubes: number;

  @Field(() => Float)
  @Column()
  kitQuantity: number;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP?: string;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP_M?: string;

  @Field(() => String, { nullable: true })
  @Column()
  DROPSHIP_X?: string;

  @Field(() => String, { nullable: true })
  @Column()
  FOB?: string;

  @Field(() => String, { nullable: true })
  @Column()
  FOB_M?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL0?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL1?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL2?: string;

  @Field(() => String, { nullable: true })
  @Column()
  LEVEL3?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_FULL?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_HALF?: string;

  @Field(() => String, { nullable: true })
  @Column()
  MIX_QTR?: string;
}
