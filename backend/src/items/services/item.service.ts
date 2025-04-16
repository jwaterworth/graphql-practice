import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../models/item.model';
import { Repository } from 'typeorm';

export class ItemService {

    constructor(@InjectRepository(Item) private itemsRepository: Repository<Item>) { }

    async findOne(id: number): Promise<Item | null> {
        return await this.itemsRepository.findOne({ where: { id } });
    }

    async findAll(where: Partial<Item>): Promise<Item[]> {
        return await this.itemsRepository.find({ where });
    }

    async create(item: Partial<Item>): Promise<Item> {
        const newItem = this.itemsRepository.create(item);
        return await this.itemsRepository.save(newItem);
    }

    async delete(id: number): Promise<Item | null> {
        const item = await this.findOne(id);
        if (!item) {
            return null;
        }
        await this.itemsRepository.delete(id);
        return item;
    }

    async update(id: number, item: Partial<Item>): Promise<Item> {
        await this.itemsRepository.update(id, item);
        return await this.findOne(id) as Item;
    }

}