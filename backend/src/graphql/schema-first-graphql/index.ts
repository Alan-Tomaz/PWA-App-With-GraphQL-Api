/* CONFIG SERVER */
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
dotenv.config();
/* IMPORT RESOLVERS */
import { resolvers } from "./resolvers.js";
/* IMPORT TYPEDEFS */
import { readFileSync } from "fs";
export const typeDefs = readFileSync(
  "src/graphql/schema-first-graphql/schema.graphql",
  "utf-8"
);

/* START SERVER WITH RESOLVERS AND TYPEDEFS */
const server = new ApolloServer({ typeDefs, resolvers });

const GRAPHQL_PORT = Number(process.env.GRAPHQL_PORT) || 4000;
/* LISTEN SERVER IN .ENV CONFIGURED PORT */
const { url } = await startStandaloneServer(server, {
  listen: { port: GRAPHQL_PORT },
});

console.log(`🚀 Server GraphQL rodando em ${url}`);
