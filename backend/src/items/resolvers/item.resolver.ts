import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Item, ItemType } from '../models/item.model';
import { ItemService } from '../services/item.service';
import { ItemDto } from '../dtos/item.dto';


@Resolver(() => Item)
export class ItemResolver {

    constructor(private itemService: ItemService) { }

    @Mutation(() => Item, { name: 'createItem' })
    async createItem(@Args('createItemsInput') createItemsInput: ItemDto) {
        return this.itemService.create(createItemsInput);
    }

    @Mutation(() => Item, { name: 'updateItem' })
    async updateItem(@Args('id', { type: () => Number }) id: number,
        @Args('name', { type: () => String }) name: string,
        @Args('type', { type: () => String }) type: ItemType,
        @Args('done', { type: () => Boolean }) done: boolean) {
        return this.itemService.update(id, { name, type, done });
    }
    @Mutation(() => Item, { name: 'deleteItem' })
    async deleteItem(@Args('id', { type: () => Number }) id: number) {
        return this.itemService.delete(id);
    }

    @Query(() => [Item], { name: 'items' })
    getAllItems(): Promise<Item[]> {
        return this.itemService.findAll({});
    }
}