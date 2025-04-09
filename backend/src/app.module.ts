import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './authors/models/author.model';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';
import { join } from 'path';
import { Post } from './posts/models/post.model';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // Enable GraphQL Playground
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', // In-memory database for demo purposes
      entities: [Author, Post],
      synchronize: true, // Auto-create database schema (only for development),
      logging: true, // Enable query logging
    }),
    AuthorsModule,
    PostsModule,
  ],
})
export class AppModule { }
