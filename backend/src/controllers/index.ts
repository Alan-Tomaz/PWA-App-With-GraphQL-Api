import { Request, Response } from "express";
import { prisma } from "../config/prismaClient.js";

export const getNotifications = async (req: Request, res: Response) => {
  /* GET ALL NOTIFICATIONS */
  const notifications = await prisma.notification.findMany();

  res.status(200).json(notifications);
};
