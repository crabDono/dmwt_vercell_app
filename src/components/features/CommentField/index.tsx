"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { Comment } from "@prisma/client";

interface CommentFieldProps {
  comments: Comment[];
}

export default function CommentField({ comments }: CommentFieldProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, content }),
    });

    setName("");
    setContent("");
    router.refresh(); // Lädt die Server-Komponenten neu, um die neue Kommentarliste abzurufen
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 border rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold mb-4">
          Hinterlassen Sie einen Kommentar
        </h3>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ihr Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Kommentar
          </label>
          <textarea
            id="content"
            name="content"
            rows={4}
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Was denken Sie?"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Senden
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg bg-gray-50">
            <p className="font-bold">{comment.name}</p>
            <p className="text-gray-800 mt-1">{comment.content}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(comment.createdAt).toLocaleDateString("de-DE")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
