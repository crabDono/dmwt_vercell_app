import { PrismaClient } from "@prisma/client";

// Deklariere eine globale Variable, um den Client zu halten
declare global {
  var prisma: PrismaClient | undefined;
}

// Prüfe, ob der Client bereits existiert. Wenn nicht, erstelle einen neuen.
// In der Produktion wird dies nur einmal ausgeführt.
// In der Entwicklung verhindert `globalThis.prisma`, dass bei jedem Hot-Reload ein neuer Client erstellt wird.
const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
