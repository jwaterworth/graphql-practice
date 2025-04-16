import { Field, InputType, Int } from '@nestjs/graphql';
import { Item, ItemType } from '../models/item.model';

@InputType()
export class ItemDto implements Omit<Item, 'id'> {
    @Field(type => String)
    name: string;

    @Field(type => String)
    type: ItemType;

    @Field(type => Int)
    done: boolean;
}