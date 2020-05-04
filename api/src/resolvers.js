/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input)
      // return [{ id: 1, name: 'moose' }]
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input)
    }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      const pet = ctx.models.Pet.create(input)
      return pet
    }
  },
  Pet: {
    owner(_, __, ctx) {
      return ctx.models.User.findOne()
    }
    // img(pet) {
    //   return pet.type === 'DOG'
    //     ? 'https://placedog.net/300/300'
    //     : 'http://placekitten.com/300/300'
    // }
  },
  User: {
    pets(user, _, ctx) {
      console.log('user', user)
      return ctx.models.Pet.findMany()
    }
  }
}
