/*
  Warnings:

  - You are about to drop the column `postId` on the `Link_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Photo_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Text_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Video_Post` table. All the data in the column will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PostToStatus` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `status` to the `Text_Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Link_Post" DROP CONSTRAINT "Link_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Photo_Post" DROP CONSTRAINT "Photo_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Text_Post" DROP CONSTRAINT "Text_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Video_Post" DROP CONSTRAINT "Video_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "_PostToStatus" DROP CONSTRAINT "_PostToStatus_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToStatus" DROP CONSTRAINT "_PostToStatus_B_fkey";

-- AlterTable
ALTER TABLE "Link_Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Photo_Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Text_Post" DROP COLUMN "postId",
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video_Post" DROP COLUMN "postId";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Status";

-- DropTable
DROP TABLE "_PostToStatus";

-- CreateTable
CREATE TABLE "CommentTextPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "CommentTextPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentTextPost" ADD CONSTRAINT "CommentTextPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Text_Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
