-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "reviewer" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "user_info" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "post_id" SERIAL NOT NULL,
    "thumnail" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "writer" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL DEFAULT '',
    "contents" TEXT NOT NULL DEFAULT '',
    "contents_detail" TEXT NOT NULL DEFAULT '',
    "profile_image" TEXT NOT NULL,
    "writer_info" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);
