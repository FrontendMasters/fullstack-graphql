const nanoid = require('nanoid')

const createPetModel = db => {
  return {
    findMany(filter) {
      return db.get('pet')
        .filter(filter)
        .value()
    },

    findOne(filter) {
      return db.get('pet')
        .find(filter)
        .value()
    },

    create(pet) {
      const newPet = {id: nanoid(), createdAt: Date.now(), ...pet}
      
      db.get('pet')
        .push(newPet)
        .write()

      return newPet
    }
  }
}

module.exports = createPetModel
