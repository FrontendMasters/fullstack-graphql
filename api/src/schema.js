const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID
    username: String
  }

  type Pet {
    id: ID
    createdAt: Int
    name: String
    type: String
  }

  type Query {
    user: User
    pet: Pet
  }

`;

module.exports = typeDefs
