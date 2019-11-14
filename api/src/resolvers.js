/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    me(_, __, ctx) {
      return {
        id: 'a123-asd-423',
        username: 'testUser'
      }
    },
    pets(_, {input}, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    pet(_, {input}, ctx) {
      return ctx.models.Pet.findOne(input);
    }
  },
  // Mutation: {
    
  // },
  // Pet: {
  //   img(pet) {
  //     return pet.type === 'DOG'
  //       ? 'https://placedog.net/300/300'
  //       : 'http://placekitten.com/300/300'
  //   }
  // },
  // User: {
    
  // }
}
