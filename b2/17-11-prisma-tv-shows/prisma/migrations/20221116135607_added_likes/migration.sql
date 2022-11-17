/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Episode` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Show` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Episode` DROP COLUMN `deletedAt`;

-- AlterTable
ALTER TABLE `Season` DROP COLUMN `deletedAt`;

-- AlterTable
ALTER TABLE `Show` DROP COLUMN `deletedAt`,
    ADD COLUMN `likes` INTEGER NOT NULL DEFAULT 0;
