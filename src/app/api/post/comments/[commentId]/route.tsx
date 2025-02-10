import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// 댓글 삭제
export async function DELETE(req: NextRequest, { params }: { params: { commentId: string } }) {
  try {
    const commentId = params.commentId;
    console.log(commentId, "commentId에요!!");

    const existingComment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingComment) {
      return NextResponse.json({ message: "Comment not found" }, { status: 404 });
    }

    const { email } = await req.json();

    if (existingComment.email !== email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    await prisma.comment.delete({
      where: { id: commentId },
    });

    return NextResponse.json({ message: "Comment deleted successfully" }, { status: 200 });
  } catch (error) {
    console.log("Error deleting comment:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// 댓글 수정
export async function PUT(req: NextRequest, { params }: { params: { commentId: string } }) {
  try {
    const commentId = params.commentId;
    console.log(commentId, "commentId에요!!");

    const { contents, email } = await req.json();

    if (!contents || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const existingComment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingComment) {
      return NextResponse.json({ message: "Comment not found" }, { status: 404 });
    }

    if (existingComment.email !== email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
      data: { contents },
    });

    return NextResponse.json(updatedComment, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
