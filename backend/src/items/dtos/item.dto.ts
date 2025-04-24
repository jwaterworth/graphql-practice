import { Field, InputType, Int } from '@nestjs/graphql';
import { Item, ItemType } from '../models/item.model';

@InputType()
export class CreateItemDto implements Omit<Item, 'id'> {
    @Field(type => String)
    name: string;

    @Field(type => String)
    type: ItemType;

    @Field()
    done: boolean;
}
@InputType()
export class UpdateItemDto implements Item {
    @Field(type => Int)
    id: number;

    @Field(type => String, {nullable: true})
    name: string;

    @Field(type => String, {nullable: true})
    type: ItemType;

    @Field({nullable: true})
    done: boolean;
}