import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 */

// We are defining local state of age and appending it to 
// server data that we get from User
const typeDefs = gql`
  extend type User {
    age: Int
  }
# Extended vaccinated type on Pet
  extend type Pet{
    vaccinated: Boolean!
  }

`;

const resolvers = {
  // Resolver resolves the schema above and adds the age
  User: {
    age() {
      return 25;
    },
  },

  // Resolver resolves the schema above and adds the vaccinated
  Pet:{
    vaccinated(){
      return true;
    }
  }

};


// link is a network connection beteen Apollo server and client
const link = new HttpLink({ uri: "http://localhost:4000/" });
// apollo gives us a cache and we call it here
const cache = new InMemoryCache();

// initialize apollo client
const client = new ApolloClient({
  link,
  cache,
  typeDefs,
  resolvers,
});

// const query = gql`
//   {
//     characters {
//       results {
//         name
//       }
//     }
//   }
// `;

// client.query({ query }).then((result) => console.log(result));

export default client;
