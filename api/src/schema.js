const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    img: String
    owner: User!
  }

  input PetInput {
    type: String
    name: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput): Pet
    user: User!
  }

  input CreatePetInput {
    name: String!
    type: String!
  }

  type Mutation {
    createPet(input: CreatePetInput!): Pet!
  }
`;
// get pet by ID or name

module.exports = typeDefs
