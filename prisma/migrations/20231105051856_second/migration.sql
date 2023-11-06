/*
  Warnings:

  - You are about to alter the column `crated_at` on the `Guest` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `Guest` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `dateOfBirth` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `created_at` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `akad_date` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `akad_time` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `wedding_date` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `wedding_time` on the `WeddingDetail` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `Guest` MODIFY `crated_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `dateOfBirth` DATETIME NULL;

-- AlterTable
ALTER TABLE `WeddingDetail` MODIFY `created_at` DATETIME NOT NULL,
    MODIFY `updated_at` DATETIME NULL,
    MODIFY `akad_date` DATETIME NULL,
    MODIFY `akad_time` DATETIME NULL,
    MODIFY `wedding_date` DATETIME NULL,
    MODIFY `wedding_time` DATETIME NULL;
