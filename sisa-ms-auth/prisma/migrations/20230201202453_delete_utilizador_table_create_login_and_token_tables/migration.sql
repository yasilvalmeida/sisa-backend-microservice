/*
  Warnings:

  - You are about to drop the `Utilizador` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoToken" AS ENUM ('Activacao', 'Recuperacao');

-- CreateEnum
CREATE TYPE "TipoLogin" AS ENUM ('Sucesso', 'Falhado');

-- DropTable
DROP TABLE "Utilizador";

-- CreateTable
CREATE TABLE "Token" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "validade" TIMESTAMP(3) NOT NULL,
    "tipo" "TipoToken" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Login" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "tentativa" INTEGER NOT NULL DEFAULT 0,
    "tipo" "TipoLogin" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Login_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_email_key" ON "Token"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Login_email_key" ON "Login"("email");
