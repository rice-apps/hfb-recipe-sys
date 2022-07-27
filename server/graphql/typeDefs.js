const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    password: String!
  }
  type Token {
    jwt: ID!
  }
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }
  type Mutation {
    signup(email: String!, username: String!, password: String!): String!,
    login(email: String, username: String, password: String!): Token!,
  }`


