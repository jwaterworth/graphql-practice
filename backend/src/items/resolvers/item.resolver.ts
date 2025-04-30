import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item, ItemType } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { CreateItemDto, UpdateItemDto } from '../dtos/item.dto';


@Resolver(() => Item)
export class ItemResolver {

    constructor(private itemService: ItemService) { }

    @Mutation(() => Item, { name: 'createItem' })
    async createItem(@Args('createItemsInput') createItemsInput: CreateItemDto) {
        return this.itemService.create(createItemsInput);
    }

    @Mutation(() => Item, { name: 'updateItem' })
    async updateItem(@Args('updateItemsInput') { id, done, type, name }: UpdateItemDto) {
        return this.itemService.update(id, { name, type, done });
    }

    @Mutation(() => Item, { name: 'deleteItem' })
    async deleteItem(@Args('id', { type: () => Int }) id: number) {
        return this.itemService.delete(id);
    }

    @Query(() => [Item], { name: 'items' })
    getAllItems(): Promise<Item[]> {
        return this.itemService.findAll({});
    }
}