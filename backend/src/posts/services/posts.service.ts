import { Injectable } from '@nestjs/common';
import { Post } from '../models/post.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PostsService {

    constructor(@InjectRepository(Post) private postsRepository: Repository<Post>) { }

    async findOne(id: number): Promise<Post | null> {
        return await this.postsRepository.findOne({ where: { id } });
    }

    async findAll(where: Partial<Post>): Promise<Post[]> {
        return await this.postsRepository.find({ where });
    }

}