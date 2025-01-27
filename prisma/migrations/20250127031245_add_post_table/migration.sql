-- CreateTable
CREATE TABLE "post" (
    "post_id" SERIAL NOT NULL,
    "thumnail" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL,
    "writer" TEXT NOT NULL DEFAULT '',
    "title" TEXT NOT NULL DEFAULT '',
    "contents" TEXT NOT NULL DEFAULT '',
    "contents_detail" TEXT NOT NULL DEFAULT '',
    "profile_image" TEXT NOT NULL,
    "writer_info" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "post_pkey" PRIMARY KEY ("post_id")
);
