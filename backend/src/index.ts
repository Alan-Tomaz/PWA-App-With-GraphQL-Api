import "reflect-metadata";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createSchema } from "./schema.js";
dotenv.config();

async function bootstrap() {
  const schema = await createSchema();

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server running at ${url}`);
}

bootstrap();
