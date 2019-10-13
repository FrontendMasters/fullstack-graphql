const nanoid = require('nanoid')

const createUserModel = db => {
  return {
    findOne() {
      return db.get('user')
        .value()
    },

    create(user) {
      const newUser = {id: nanoid(), createdAt: Date.now(), ...user}
      db.set('user', newUser)
        .write()
  
      return newUser
    }
  }
}

module.exports = createUserModel
