import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const postId = Number(params.id);
    const selectedPost = await prisma.post.findUnique({
      where: { post_id: postId },
    });

    return new Response(JSON.stringify(selectedPost), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log("Error fetching date :", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
  }
}
