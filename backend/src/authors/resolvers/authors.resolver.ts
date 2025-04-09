import { Args, Int, ResolveField, Parent, Resolver, Query, Mutation, Info } from '@nestjs/graphql';
import { Author } from '../models/author.model';
import { AuthorsService } from '../services/authors.service';
import { PostsService } from '../../posts/services/posts.service';
import { Post } from '../../posts/models/post.model';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) { }

  @Mutation(() => Author, { name: 'createAuthor' })
  async createAuthor(
    @Args('firstName', { type: () => String }) firstName: string,
    @Args('lastName', { type: () => String }) lastName: string,
  ) {
    return this.authorsService.create({ firstName, lastName });
  }

  @Mutation(() => Author, { name: 'updateAuthor' })
  async updateAuthor(
    @Args('id', { type: () => Int }) id: number,
    @Args('firstName', { type: () => String }) firstName: string,
    @Args('lastName', { type: () => String }) lastName: string,
  ) {
    return this.authorsService.update(id, { firstName, lastName });
  }

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number, @Info() info: GraphQLResolveInfo) {

    return this.authorsService.findOne(id, this.getSelectedFields(info) as [keyof Author]);
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  private getSelectedFields(info: GraphQLResolveInfo): string[] {
    const selections = info.fieldNodes[0].selectionSet?.selections;
    if (!selections) return [];
    return selections.map((selection) => {
      if ('name' in selection) {
        return selection.name.value;
      }
      return '';
    });
  }
}

