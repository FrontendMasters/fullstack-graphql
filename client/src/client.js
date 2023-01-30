import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */

// a link is like a network interface to access a GQL server
// we're telling the Apollo Client that our API is at localhost:4000
const link = new HttpLink({ uri: "http://localhost:4000/" }); // https://rickandmortyapi.com/graphql
const cache = new InMemoryCache();

// initializing our client
const client = new ApolloClient({
  link,
  cache,
});

// test query to try when using https://rickandmortyapi.com/graphql as our link
// const query = gql`
//   {
//     characters {
//       results {
//         id
//         name
//       }
//     }
//   }
// `;

// client.query({ query }).then((result) => console.log(result));

export default client;
