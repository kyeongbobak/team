import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { verifyToken } from "../../../../../utils/server/verifyToken";
import { getCommentById } from "../../../../../utils/server/commentAccess";

const prisma = new PrismaClient();

// 댓글 삭제
export async function DELETE(req: NextRequest, { params }: { params: { commentId: string } }) {
  try {
    const { commentId } = params;

    const tokenVerification = verifyToken(req);

    if (tokenVerification.error) {
      return NextResponse.json({ message: tokenVerification.error }, { status: 401 });
    }

    const userEmail = tokenVerification.email;

    const existingComment = await getCommentById(commentId);

    if ("error" in existingComment) {
      return NextResponse.json({ message: existingComment.error }, { status: 404 });
    }

    if (existingComment.email !== userEmail) {
      return NextResponse.json({ message: "Unautorized : you can only delete your own Comment" }, { status: 403 });
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
  const { commentId } = params;

  const tokenVerification = verifyToken(req);

  if (tokenVerification.error) {
    return NextResponse.json({ message: tokenVerification.error }, { status: 401 });
  }

  const userEmail = tokenVerification.email;

  try {
    const { contents, email } = await req.json();

    if (!contents || !email) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const existingComment = await getCommentById(commentId);

    if ("error" in existingComment) {
      return NextResponse.json({ message: existingComment.error }, { status: 404 });
    }

    if (existingComment.email !== userEmail) {
      return NextResponse.json({ message: "Unautorized : you can only delete your own Comment" }, { status: 403 });
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
