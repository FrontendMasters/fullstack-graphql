import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";
/**
 * Create a new apollo client and export as default
 */
const http = new HttpLink({ uri: "http://localhost:4000/" });

const cache = new InMemoryCache();
const delay = setContext((request) => {
  new Promise((success, fail) => {
    setTimeout(() => {
      success();
    }, 800);
  });
});

const link = ApolloLink.from([delay, http]);

const client = new ApolloClient({
  link,
  cache,
});
export default client;
