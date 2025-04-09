import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './models/post.model';


@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    providers: [PostsService],
    exports: [PostsService],
})
export class PostsModule { }