import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Kombiniert CSS-Klassen.
 * - Akzeptiert dieselben Eingabetypen wie `clsx`.
 * - Verwendet `clsx` zum Kombinieren und `twMerge` zum Auflösen von Tailwind-spezifischen Klassenkonflikten.
 *
 * Beispiel:
 * cn("p-2", condition && "text-red-500", ["flex", "items-center"])
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
