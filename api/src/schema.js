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
     name: String
     type: String
     owner: User!
   }

   input PetInput {
     name: String
     type: String
   }

   input ShoeInput {
    brand: String
    size: Int
  }

  input PetbyIdInput {
    id: ID
    type: String
  }

  input NewPetInput {
    name: String!
    type: String!
  }

   type Shoe {
     brand: String!
     size: Int!
   }

   type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetbyIdInput): Pet
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
  }

`;

module.exports = typeDefs
