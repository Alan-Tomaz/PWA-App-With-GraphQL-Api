import path, { dirname } from "path";
import swaggerJSDoc from "swagger-jsdoc";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routesGlobTs = path.resolve(__dirname, "../routes/*.ts");
const routesGlobJs = path.resolve(__dirname, "../routes/*.js");

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Minha API",
      version: "1.0.0",
      description: "API Express autodocumentada",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [routesGlobTs, routesGlobJs],
});
