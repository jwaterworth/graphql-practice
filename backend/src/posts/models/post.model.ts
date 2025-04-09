import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../../authors/models/author.model';

@Entity()
@ObjectType()
export class Post {

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  @Field()
  title: string;

  @Field({ nullable: true })
  @Field((type) => Int, { nullable: true })
  votes?: number;

  @Field({ nullable: true })
  authorId?: number;

  @Field(() => Author)
  @ManyToOne(() => Author, (author) => author.posts, { onDelete: 'CASCADE' })
  author: Author;
}
