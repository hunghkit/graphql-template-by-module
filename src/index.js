import { ApolloServer, makeExecutableSchema } from "apollo-server";

import "./model";
import modules from "./modules";

const { resolvers, schemas } = Object.values(modules).reduce((list, current) => {
  if (current.resolvers) {
    list.resolvers.push(current.resolvers)
  }
  
  if (current.schemas) {
    list.schemas.push(current.schemas)
  }
  return list;
}, { 
  resolvers: [{
    Query: {
      greeting: () => 'Hello to graphql template'
    }
  }], 
  schemas: [`
    type Query {
      greeting: String
    }
  `]
});

const server = new ApolloServer({ 
  schema: makeExecutableSchema({
    typeDefs: schemas.flat(Infinity),
    resolvers: resolvers.flat(Infinity),
  })
});

server
  .listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
