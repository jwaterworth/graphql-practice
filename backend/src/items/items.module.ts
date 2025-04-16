import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './models/item.model';
import { Module } from '@nestjs/common';
import { ItemService } from './services/item.service';
import { ItemResolver } from './resolvers/item.resolver';


@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    providers: [ItemResolver, ItemService],
    exports: [ItemService],
})
export class ItemsModule { }