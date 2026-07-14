-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('STUDY', 'FAMILY', 'WORK', 'GAMING', 'FRIENDS', 'CUSTOM');

-- CreateEnum
CREATE TYPE "RetentionPolicy" AS ENUM ('UNTIL_EMPTY', 'ONE_DAY', 'SEVEN_DAYS', 'THIRTY_DAYS');

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "retentionPolicy" "RetentionPolicy" NOT NULL DEFAULT 'UNTIL_EMPTY',
ADD COLUMN     "roomType" "RoomType" NOT NULL DEFAULT 'CUSTOM';
