import { Resolver, Query, Arg } from 'type-graphql';
import { getJobs } from '../api';

import { Job } from './jobs';

const query = `
{
    jobs {
        id
        title 
        slug
        tags
        remotes
        company
        cities
        countries
      }
}
`;

@Resolver(Job)
export class JobsResolver {
  @Query(() => Job, { nullable: true })
  job(@Arg('id', () => String) id: string): Job | undefined {
    const response = fetch('https://api.graphql.jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((jobs) => {
        return jobs;
      });
    return response;
  }
  @Query(() => [Job])

}
