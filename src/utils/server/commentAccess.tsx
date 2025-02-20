import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type CommentResponse = { error: string } | { email: string | null };

export async function getCommentById(commentId: string): Promise<CommentResponse> {
  const existingComment = await prisma.comment.findUnique({
    where: { id: commentId },
  });

  if (!existingComment) {
    return { error: "Comment not found" };
  }

  return { email: existingComment.email };
}
