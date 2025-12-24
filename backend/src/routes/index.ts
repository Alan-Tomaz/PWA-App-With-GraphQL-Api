import express, { Request, Response } from "express";
import { getNotifications } from "../controllers/index.js";

const router = express.Router();

/**
 * @openapi
 * /api:
 *   get:
 *     summary: Lista usuários
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas à API
 */
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API. Visit /api-docs for documentation.");
});

/**
 * @openapi
 * /api/notification:
 *   get:
 *     summary: Lista de notificações
 *     responses:
 *       200:
 *       notificações: Array com as notificações
 */
router.get("/notification", getNotifications);

export default router;
