import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import dotenv from "dotenv";
import apiRouter from "./routes/index.js";
import http from "http";
import { Server } from "socket.io";
import { prisma } from "./config/prismaClient.js";
dotenv.config();

const app = express();

// SERVER HTTP
const server = http.createServer(app);

/* SWAGGER */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
/* ROUTES */
app.use("/api", apiRouter);

/* GRAPHQL */
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });

  socket.on("send-notification", async (msg) => {
    try {
      // save in the database sqlite with prisma
      const notification = await prisma.notification.create({
        data: { message: msg },
      });

      // send  to all clients except sender
      io.emit("notification", notification);
    } catch (err) {
      console.error("Erro Prisma:", err);
    }
    console.log("Mensagem recebida:", msg);
  });
});

/* START EXPRESS SERVER */
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;
server.listen(EXPRESS_PORT, () => {
  console.log(
    "🚀 Server Express with Socket.IO started, access http://localhost:3000/api-docs to view the express API documentation."
  );
});
