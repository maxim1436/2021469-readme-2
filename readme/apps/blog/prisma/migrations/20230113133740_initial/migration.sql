/*
  Warnings:

  - Added the required column `status` to the `Link_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Photo_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Video_Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link_Post" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Photo_Post" ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video_Post" ADD COLUMN     "status" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "CommentsVideoPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "CommentsVideoPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentsPhotoPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "CommentsPhotoPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentsLinkPost" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "CommentsLinkPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentsVideoPost" ADD CONSTRAINT "CommentsVideoPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Video_Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentsPhotoPost" ADD CONSTRAINT "CommentsPhotoPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Photo_Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentsLinkPost" ADD CONSTRAINT "CommentsLinkPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Link_Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
