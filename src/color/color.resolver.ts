import { Resolver, Query, Args } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { Color } from './color.entity';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) {}

  @Query(() => [Color])
  async colors(): Promise<Color[]> {
    return this.colorService.findAll();
  }

  @Query(() => [Color])
  async colorsPaginated(
    @Args('page', { type: () => Number }) page: number,
    @Args('limit', { type: () => Number }) limit: number,
  ): Promise<Color[]> {
    return this.colorService.findPaginated(page, limit);
  }

  @Query(() => Color, { nullable: true })
  async colorByName(
    @Args('name', { type: () => String }) name: string,
  ): Promise<Color | null> {
    return this.colorService.findByName(name);
  }
}
