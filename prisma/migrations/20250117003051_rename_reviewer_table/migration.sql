-- CreateTable
CREATE TABLE "reviewer" (
    "id" SERIAL NOT NULL,
    "reviewer" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_info" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "reviewer_pkey" PRIMARY KEY ("id")
);
