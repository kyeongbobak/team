import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { postId: string } }) {
  try {
    const postId = Number(params.postId);

    if (isNaN(postId)) {
      return new Response(JSON.stringify({ error: "Invalid postId" }), { status: 400 });
    }

    const comments = await prisma.comment.findMany({
      where: { postId: postId },
      orderBy: { created_at: "desc" },
    });

    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error fetching date :", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}
