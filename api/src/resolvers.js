/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
   pets(_, {input}, context) {
    const result = context.models.Pet.findMany(input)
    return result
   },
   
   pet(_, {input}, context) {
    const result = context.models.Pet.findOne(input)
    return result
   },

   user(_, __, context) {
    return context.user
   }
  },
  Mutation: {
    createPet(_, {input}, context) {
      const resultPet = context.models.Pet.create(input)
      return resultPet
    }
  },
  Pet: {
    owner(pet, __, context) {
      return context.user
    }
  },
  User: {
    pets(user, __, context) {
     const result = context.models.Pet.findMany()
     return result

    }
  }
}
