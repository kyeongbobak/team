import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// 댓글 조회
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");

    if (!postId || isNaN(Number(postId))) {
      return NextResponse.json({ error: "Invalid postId" }, { status: 400 });
    }

    const comments = await prisma.comment.findMany({
      where: { postId: Number(postId) },
      orderBy: { created_at: "desc" },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.log("Error fetching date :", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}

// 댓글 등록
export async function POST(req: Request) {
  try {
    const { postId, email, contents } = await req.json();

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

    return NextResponse.json({ message: "Comment added successfully", comment: createComment }, { status: 201 });
  } catch (error) {
    console.log("Error creating comment:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
