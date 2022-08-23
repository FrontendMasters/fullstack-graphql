const {ApolloServer} = require('apollo-server')
const  gql  = require('graphql-tag')


const typeDefs = gql`
type User {
    email: String!
    avatar: String!
    friends: [User]!
}

type Query {
    me: User!
}
`

const resolvers = {
    Query: {
        me() {
            return {
                email: 'yoda@do.co',
                avatar: 'YODA',
                friends: ['darth']

            }
        }
    }
}

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// })

// server.listen(4000).then(() => {
//     console.log('listening on 4000')
// })