import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { postId, email, contents } = await req.json();

    console.log(postId, email, contents);

    if (!postId || !email || !contents) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const createComment = await prisma.comment.create({
      data: {
        postId,
        email,
        contents,
        created_at: new Date(),
      },
    });

    return new Response(JSON.stringify({ message: "Comment added successfully", comment: createComment }), { status: 201 });
  } catch (error) {
    console.log("Error creating comment:", error);
    return new Response(JSON.stringify({ error: "error fetching data" }), { status: 500 });
  }
}
