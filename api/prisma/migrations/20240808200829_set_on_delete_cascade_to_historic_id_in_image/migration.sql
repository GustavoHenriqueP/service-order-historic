-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_historicId_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_historicId_fkey" FOREIGN KEY ("historicId") REFERENCES "Historic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
