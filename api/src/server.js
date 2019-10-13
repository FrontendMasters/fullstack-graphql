const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const {models, db} = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    const user = db.get('user').value()
    return {models, db, user}
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
})
