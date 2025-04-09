import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsSelect, FindOptionsSelectByString, Repository } from 'typeorm';

@Injectable()
export class AuthorsService {

    constructor(@InjectRepository(Author) private authorsRepository: Repository<Author>) { }


    async create(author: Partial<Author>): Promise<Author> {
        const newAuthor = this.authorsRepository.create(author);
        return await this.authorsRepository.save(newAuthor);
    }

    async update(id: number, author: Partial<Author>): Promise<Author> {
        await this.authorsRepository.update(id, author);
        return this.findOne(id) as Promise<Author>;
    }

    async findOne(id: number, select?: [keyof Author]): Promise<Author | null> {
        return await this.authorsRepository.findOne({ where: { id }, select });
    }

    async findAll(where: Partial<Author>): Promise<Author[]> {
        return await this.authorsRepository.find({ where });
    }

}