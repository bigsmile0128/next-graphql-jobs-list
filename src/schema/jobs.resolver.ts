import { Resolver, Query, Arg } from 'type-graphql';

import { Job } from './jobs';



@Resolver(Job)
export class JobsResolver {
  @Query(() => Job, { nullable: true })
//   job(@Arg('id', () => String) id: string): Job | undefined {
//     const job = jobs.find((job) => job.id === id);
//     if (job === undefined) {
//       throw new Error('Job not found');
//     }
//     return job;
//   }

  @Query(() => [Job])
  jobs(): Job[] {
    return jobs;
  }
}
