-- CreateTable
CREATE TABLE `User` (
    `userId` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NULL,
    `accountVerified` BOOLEAN NOT NULL,
    `connectWithGoogle` BOOLEAN NOT NULL,
    `password` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `placeOfBirth` VARCHAR(255) NULL,
    `dateOfBirth` DATETIME NULL,

    UNIQUE INDEX `User_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Guest` (
    `guestId` INTEGER NOT NULL,
    `url` VARCHAR(255) NULL,
    `crated_at` DATETIME NULL,
    `updated_at` DATETIME NULL,
    `name` VARCHAR(255) NULL,
    `address` VARCHAR(255) NULL,
    `phoneNumber` VARCHAR(255) NULL,
    `relationship` VARCHAR(255) NULL,
    `invitationStatus` VARCHAR(255) NULL,
    `wishes` VARCHAR(500) NULL,
    `rsvp` VARCHAR(255) NULL,
    `userId` VARCHAR(191) NULL,

    UNIQUE INDEX `Guest_guestId_key`(`guestId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WeddingDetail` (
    `userId` VARCHAR(191) NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NULL,
    `akad_date` DATETIME NULL,
    `akad_time` DATETIME NULL,
    `wedding_date` DATETIME NULL,
    `wedding_time` DATETIME NULL,
    `wedding_location` VARCHAR(255) NULL,
    `bridesName` VARCHAR(255) NULL,
    `groomsName` VARCHAR(255) NULL,
    `brides_fathers_name` VARCHAR(255) NULL,
    `brides_mothers_name` VARCHAR(255) NULL,
    `grooms_fathers_name` VARCHAR(255) NULL,
    `grooms_mothers_name` VARCHAR(255) NULL,
    `domain` VARCHAR(255) NULL,

    UNIQUE INDEX `WeddingDetail_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubscriptionFeature` (
    `userId` VARCHAR(191) NOT NULL,
    `plans` VARCHAR(255) NOT NULL DEFAULT 'Basic',

    UNIQUE INDEX `SubscriptionFeature_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Guest` ADD CONSTRAINT `Guest_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WeddingDetail` ADD CONSTRAINT `WeddingDetail_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubscriptionFeature` ADD CONSTRAINT `SubscriptionFeature_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
