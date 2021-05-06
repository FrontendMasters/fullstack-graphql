import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */

// link is a network connection beteen Apollo server and client
const link = new HttpLink({ uri: "https://rickandmortyapi.com/graphql" });
// apollo gives us a cache and we call it here
const cache = new InMemoryCache();

// initialize apollo client
const client = new ApolloClient({
  link,
  cache,
});

const query = gql`
  {
    characters {
      results {
        name
      }
    }
  }
`;

client.query({ query }).then((result) => console.log(result));

export default client;
