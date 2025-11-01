import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma"; // <-- WICHTIG: Importiere den Singleton-Client

export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(comments);
  } catch (error) {
    console.error("Fehler beim Abrufen der Kommentare:", error);
    // Gib eine aussagekräftige Fehlermeldung zurück
    return new NextResponse("Fehler bei der Datenbankabfrage.", {
      status: 500,
    });
  }
}

// Deine POST-Funktion bleibt wahrscheinlich gleich, aber stelle auch hier sicher,
// dass sie den importierten `prisma`-Client verwendet.
export async function POST(request: Request) {
  try {
    const { name, content } = await request.json();
    const newComment = await prisma.comment.create({
      data: {
        name,
        content,
      },
    });
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    console.error("Fehler beim Erstellen des Kommentars:", error);
    return new NextResponse("Fehler beim Speichern in der Datenbank.", {
      status: 500,
    });
  }
}
