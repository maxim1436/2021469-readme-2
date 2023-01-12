/*
  Warnings:

  - You are about to drop the column `postId` on the `Link_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Photo_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Text_Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Video_Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Link_Post" DROP CONSTRAINT "Link_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Photo_Post" DROP CONSTRAINT "Photo_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Text_Post" DROP CONSTRAINT "Text_Post_postId_fkey";

-- DropForeignKey
ALTER TABLE "Video_Post" DROP CONSTRAINT "Video_Post_postId_fkey";

-- AlterTable
ALTER TABLE "Link_Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Photo_Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Text_Post" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Video_Post" DROP COLUMN "postId";

-- AddForeignKey
ALTER TABLE "Video_Post" ADD CONSTRAINT "Video_Post_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text_Post" ADD CONSTRAINT "Text_Post_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo_Post" ADD CONSTRAINT "Photo_Post_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link_Post" ADD CONSTRAINT "Link_Post_id_fkey" FOREIGN KEY ("id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
