import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Job {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  slug: string;

  @Field(() => [String])
  tags: string[];

  @Field(() => [String])
  remotes: string[];

  @Field(() => String)
  company: string;

  @Field(() => [String])
  cities: string[];

  @Field(() => [String])
  countries: string[];
}
