/*
  Warnings:

  - You are about to drop the `Login` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `valor` to the `Token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "valor" TEXT NOT NULL;

-- DropTable
DROP TABLE "Login";

-- CreateTable
CREATE TABLE "TentativaLogin" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "tentativa" INTEGER NOT NULL DEFAULT 0,
    "tipo" "TipoLogin" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TentativaLogin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TentativaLogin_email_key" ON "TentativaLogin"("email");
