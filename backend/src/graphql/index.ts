import "reflect-metadata";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createSchema } from "./schema.js";
dotenv.config();

async function bootstrap() {
  const schema = await createSchema();

  const server = new ApolloServer({ schema });

  const GRAPHQL_Port = process.env.GRAPHQL_PORT || 4000;
  const { url } = await startStandaloneServer(server, {
    listen: { port: Number(GRAPHQL_Port) },
  });

  console.log(`🚀 Server GraphQL running. Access ${url} to view documentation`);
}

bootstrap();
