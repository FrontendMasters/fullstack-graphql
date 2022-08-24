/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
   pets(_, {input}, context) {
    console.log('Q.Pets')
    const result = context.models.Pet.findMany(input)
    return result
   },
   
   pet(_, {input}, context) {
    console.log('Q.Pet')
    const result = context.models.Pet.findOne(input)
    return result
   },

   user(_, __, context) {
    console.log('Q.User')
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
    user(pet, __, context) {
      console.log('PET.user')
      return context.user
    }
  },
  User: {
    pets(user, __, context) {
      console.log('USER.pets')
      const petResult = user.pets.map((pet) => {
        return context.models.Pet.findOne(pet)
      })
      return petResult
      
      // let petArr = []
      // petIds.forEach((pet) => {
      //   const petVal = context.models.Pet.findMany(pet)
      //   petArr.push(petVal)
      // })
      // console.log(petArr, 'PETARR')
    // return petArr.flat()

    }
  },

}
