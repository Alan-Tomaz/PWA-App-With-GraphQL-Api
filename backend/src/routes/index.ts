import express, { Request, Response } from "express";

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

export default router;
