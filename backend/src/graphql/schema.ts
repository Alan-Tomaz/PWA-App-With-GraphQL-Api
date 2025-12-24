import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver.js";
import path from "node:path";

export async function createSchema() {
  return buildSchema({
    resolvers: [UserResolver],
    /* OPCIONAL */
    emitSchemaFile: "src/graphql/schema.graphql",
  });
}
