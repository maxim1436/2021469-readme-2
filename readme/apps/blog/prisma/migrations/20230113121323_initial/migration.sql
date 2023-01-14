/*
  Warnings:

  - You are about to drop the `CommentTextPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommentTextPost" DROP CONSTRAINT "CommentTextPost_postId_fkey";

-- DropTable
DROP TABLE "CommentTextPost";

-- CreateTable
CREATE TABLE "CommentsTextPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "CommentsTextPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentsTextPost" ADD CONSTRAINT "CommentsTextPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Text_Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
