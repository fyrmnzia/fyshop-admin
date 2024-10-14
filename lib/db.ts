import { PrismaClient } from "@prisma/client";

// Hanya deklarasi tipe di global scope, tanpa memberikan nilai
declare global {
  var prisma: PrismaClient | undefined;
}

// Menggunakan instance PrismaClient dari globalThis atau membuat yang baru
const db = globalThis.prisma || new PrismaClient();

// Menyimpan instance PrismaClient ke globalThis di mode pengembangan
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
