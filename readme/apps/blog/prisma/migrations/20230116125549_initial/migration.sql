/*
  Warnings:

  - You are about to drop the `CommentsLinkPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommentsPhotoPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommentsTextPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommentsVideoPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CommentsLinkPost" DROP CONSTRAINT "CommentsLinkPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentsPhotoPost" DROP CONSTRAINT "CommentsPhotoPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentsTextPost" DROP CONSTRAINT "CommentsTextPost_postId_fkey";

-- DropForeignKey
ALTER TABLE "CommentsVideoPost" DROP CONSTRAINT "CommentsVideoPost_postId_fkey";

-- DropTable
DROP TABLE "CommentsLinkPost";

-- DropTable
DROP TABLE "CommentsPhotoPost";

-- DropTable
DROP TABLE "CommentsTextPost";

-- DropTable
DROP TABLE "CommentsVideoPost";

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
