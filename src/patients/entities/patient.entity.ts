import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatientDocument = Patient & Document;

@Schema()
export class Location {
  @Prop()
  timefrom: string;

  @Prop()
  timeto: string;

  @Prop()
  detail: string;

  @Prop()
  locationType: string;

  @Prop()
  location: string;
}
// Generate a Mongoose Schema before use as Subdocument
const LocationSchema = SchemaFactory.createForClass(Location);

@Schema()
export class Patient {
  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  occupation: string;

  @Prop({ type: [LocationSchema] })
  locations: Location[];
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
