/*
  Warnings:

  - You are about to drop the column `rating` on the `Store` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Store" DROP CONSTRAINT "Store_managerUserId_fkey";

-- AlterTable
ALTER TABLE "Store" DROP COLUMN "rating",
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "logoUrl" DROP NOT NULL,
ALTER COLUMN "managerUserId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Store" ADD CONSTRAINT "Store_managerUserId_fkey" FOREIGN KEY ("managerUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
