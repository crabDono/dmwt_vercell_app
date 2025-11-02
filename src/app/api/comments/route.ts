import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, content } = await request.json();

    if (!name || !content) {
      return NextResponse.json(
        { message: "Name und Inhalt sind erforderlich." },
        { status: 400 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        name,
        content,
      },
    });
    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Kommentar konnte nicht erstellt werden." },
      { status: 500 }
    );
  }
}
