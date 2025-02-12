import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const postId = Number(params.id);
    console.log(postId, "POSTID에요!!!!");
    const selectedPost = await prisma.post.findUnique({
      where: { post_id: postId },
    });
    return NextResponse.json(selectedPost, { status: 200 });
  } catch (error) {
    console.log("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
