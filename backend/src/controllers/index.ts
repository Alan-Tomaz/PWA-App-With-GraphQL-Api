import { Request, Response } from "express";
import { prisma } from "../config/prismaClient.js";
import { cache } from "../config/nodeCache.js";

export const getNotifications = async (req: Request, res: Response) => {
  /* GET ALL NOTIFICATIONS */
  let data;

  /* IF HAS NOTIFICATION IN CACHE, RETURN IT. CASE NOT, SEARCH THE NOTIFICATIONS IN DATABASE */
  const cached = cache.get("notifications");
  if (cached) {
    console.log("📦 Cache hit");
    data = cached;
  } else {
    console.log("🗄️ Cache miss");
    const notifications = await prisma.notification.findMany();
    data = notifications;
    cache.set("notifications", notifications);
  }

  res.status(200).json(data);
};
