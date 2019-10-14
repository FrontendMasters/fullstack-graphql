// import db from './db/db';
/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    // context - shared context among all the resolvers
    // info - AST of the incoming query, useful for projection on DB queries
    // demo(_, args, context, info) {
    //   const { models } = context;
    //   models.Pet.findMany({});
    // },

    // pets(_, {input}, ctx)
    pets(_, args, ctx) {
      // return db;
      const { input } = args;
      return ctx.models.Pet.findMany(input);
      // return [
      //   {
      //     id: "1",
      //     createdAt: "asdf",
      //     name: "fluffy",
      //     type: "dog"
      //   }
      // ];
    },
    pet(_, args, ctx) {
      const { input } = args;
      return ctx.models.Pet.findOne(input);
    }
  },
  Pet: {
    // id(pet){
    //   return 3;
    // }
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input);
    }
  },
  // Pet: {
  //   img(pet) {
  //     return pet.type === "DOG"
  //       ? "https://placedog.net/300/300"
  //       : "http://placekitten.com/300/300";
  //   }
  // },
  User: {}
};
