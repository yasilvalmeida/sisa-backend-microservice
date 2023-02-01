/*
  Warnings:

  - You are about to drop the column `pass` on the `Utilizador` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Utilizador` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Utilizador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Utilizador` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Utilizador_nome_key";

-- AlterTable
ALTER TABLE "Utilizador" DROP COLUMN "pass",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Utilizador_email_key" ON "Utilizador"("email");
