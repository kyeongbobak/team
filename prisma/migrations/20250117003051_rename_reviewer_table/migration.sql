-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "reviewer" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_info" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);
