import { Resolvers, User } from "./generated/graphql.js";

const users: User[] = [];

/* IMPORTA TIPOS DO SCHEMA.GRAPHQL */
export const resolvers: Resolvers = {
  /* CONSULTA DADOS */
  Query: {
    hello: () => "Olá, GraphQL 🚀",

    user: (_: any, args: { id: string }) => {
      return users[Number(args.id)];
    },

    users: (_: any) => {
      return users;
    },
  },

  /* ALTERA DADOS */
  Mutation: {
    createUser: (_: any, args: { name: string; email: string }) => {
      const newUser = {
        id: users.length + 1 + "",
        name: args.name,
        email: args.email,
      };

      users.push(newUser);
      return newUser;
    },
  },
};
