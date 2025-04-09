import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsResolver } from './resolvers/authors.resolver';
import { AuthorsService } from './services/authors.service';
import { Author } from './models/author.model';
import { Module } from '@nestjs/common';
import { PostsModule } from '../posts/posts.module';

@Module({
    imports: [TypeOrmModule.forFeature([Author]), PostsModule],
    providers: [AuthorsResolver, AuthorsService],
    exports: [AuthorsService],
})
export class AuthorsModule { }