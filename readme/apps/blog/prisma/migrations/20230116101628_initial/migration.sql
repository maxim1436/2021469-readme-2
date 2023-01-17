/*
  Warnings:

  - Added the required column `post_id` to the `Link_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Photo_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Text_Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Video_Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link_Post" ADD COLUMN     "post_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Photo_Post" ADD COLUMN     "post_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Text_Post" ADD COLUMN     "post_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Video_Post" ADD COLUMN     "post_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Video_Post" ADD CONSTRAINT "Video_Post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text_Post" ADD CONSTRAINT "Text_Post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo_Post" ADD CONSTRAINT "Photo_Post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link_Post" ADD CONSTRAINT "Link_Post_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
