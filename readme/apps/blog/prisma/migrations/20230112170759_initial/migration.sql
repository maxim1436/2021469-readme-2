/*
  Warnings:

  - Added the required column `postId` to the `Link_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Photo_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Text_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Video_Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Link_Post" DROP CONSTRAINT "Link_Post_id_fkey";

-- DropForeignKey
ALTER TABLE "Photo_Post" DROP CONSTRAINT "Photo_Post_id_fkey";

-- DropForeignKey
ALTER TABLE "Text_Post" DROP CONSTRAINT "Text_Post_id_fkey";

-- DropForeignKey
ALTER TABLE "Video_Post" DROP CONSTRAINT "Video_Post_id_fkey";

-- AlterTable
ALTER TABLE "Link_Post" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Photo_Post" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Text_Post" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Video_Post" ADD COLUMN     "postId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Video_Post" ADD CONSTRAINT "Video_Post_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text_Post" ADD CONSTRAINT "Text_Post_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo_Post" ADD CONSTRAINT "Photo_Post_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link_Post" ADD CONSTRAINT "Link_Post_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
