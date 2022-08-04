import { ApolloServer } from 'apollo-server-micro';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { JobsResolver } from '../../src/schema/jobs.resolver';

const schema = await buildSchema({
  resolvers: [JobsResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

export default async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}
