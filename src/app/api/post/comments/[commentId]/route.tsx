import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.JWT_SECRET!;

// 댓글 삭제
export async function DELETE(req: NextRequest, { params }: { params: { commentId: string } }) {
  try {
    const { commentId } = params;

    const authHeader = req.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return NextResponse.json({ message: "Unauthorized : No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    let decoded;
    try {
      decoded = jwt.verify(token, SECRET_KEY) as { email: string };
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Unauthorized: Invalid token" }, { status: 401 });
    }

    const userEmail = decoded.email;

    const existingComment = await prisma.comment.findUnique({
      where: { id: commentId },
    });

    if (!existingComment) {
      return NextResponse.json({ message: "Comment not found" }, { status: 404 });
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
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const commentId = searchParams.get("commentId") as string;

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
