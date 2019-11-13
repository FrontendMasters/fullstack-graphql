const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: Int
    name: String!
    type: String
  }

  input PetInput {
      name: String
      id: ID
  }

  type Query {
      me: User!
      pets(input: PetInput): [Pet]!
      pet(id: ID): Pet!
  }
`;

module.exports = typeDefs
