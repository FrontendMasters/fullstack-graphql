const gql = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  #  type Query {
  #    me: User!
  #    #    friends: [User]!
  #  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoesInput {
    brand: String
    size: Int
  }

  input NewShoeInput {
    brand: String!
    size: Int!
  }

  type Query {
    me: User!
    shoes(input: ShoesInput!): [Shoe]!
  }

  type Mutation {
    newShoe(input: NewShoeInput!): Shoe!
  }
`;

const resolvers = {
  Query: {
    shoes(_, { input }) {
      return [
        {
          brand: "nike",
          size: 12
        },
        {
          brand: "adidas",
          size: 14
        }
      ].filter(shoe => shoe.brand === input.brand);
    },
    me() {
      return {
        email: "yoda@masters.com",
        avatar: "http://yoda.png",
        friends: []
      };
    }
  },
  Mutation: {
    newShoe(_, { input }) {
      return input;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const port = 4000;
server.listen(port).then(() => console.log(`on port ${port}`));
