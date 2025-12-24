import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DATABASE_URL!;
const adapter = new PrismaBetterSqlite3({ url: connectionString });

declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma ?? new PrismaClient({ adapter });
console.log("🎲 Database connected");

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
