import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const typeDefs = gql`
  extend type User {
    age: Int
  }
  extend type Pet {
    vax: Boolean
  }
`;

const resolvers = {
  User: {
    age() {
      return 29;
    }
  },
  Pet: {
    vax() {
      return true;
    }
  }
};

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/" }),
  cache: new InMemoryCache(),
  typeDefs,
  resolvers
});

export default client;
