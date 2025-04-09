import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {

  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  firstName?: string;

  @Column()
  @Field({ nullable: true })
  lastName?: string;

  @Field((type) => [Post], { nullable: true })
  @OneToMany(() => Post, (post) => post.author)
  posts?: Post[];
}
