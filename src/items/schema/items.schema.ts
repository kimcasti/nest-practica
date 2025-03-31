
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ItemsDocument = HydratedDocument<Items>;

@Schema()
export class Items {
  @Prop(require:true) // propiedad
  name: string,

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Items);
