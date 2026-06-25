const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");
const cors = require("cors");
const axios = require("axios");

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: `
      type User {
        id: ID!
        name: String
        email: String
        website: String
      }

      type Todo {
        id: ID!
        userId: ID!
        title: String!
        completed: Boolean!
        user: User
      }

      type Query {
        getTodos: [Todo!]!
        getUsers: [User!]!
        getUser(id: ID!): User
      }
    `,

    resolvers: {
      Todo: {
        user: async (todo) => {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${todo.userId}`
          );
          return data;
        },
      },

      Query: {
        getTodos: async () => {
          const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos"
          );
          return data;
        },

        getUsers: async () => {
          const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          return data;
        },

        getUser: async (_, { id }) => {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          return data;
        },
      },
    },
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(8000, () => {
    console.log("🚀 Server running at http://localhost:8000/graphql");
  });
}

startServer().catch(console.error);