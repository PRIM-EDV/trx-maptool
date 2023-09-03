import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SquadState } from 'proto/maptool.squad';

export type DbSquadDocument = DbSquad & Document;

@Schema()
export class DbSquad {
    @Prop({required: true, unique: true})
    name: string; 

    @Prop({required: true, unique: false})
    callsign: string;

    @Prop({required: true, unique: false, enum: SquadState}) 
    state: SquadState;

    @Prop({required: false, unique: false})
    combattants: number;
}

export const DbSquadSchema = SchemaFactory.createForClass(DbSquad);