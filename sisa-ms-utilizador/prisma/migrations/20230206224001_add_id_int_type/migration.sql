-- CreateEnum
CREATE TYPE "Acesso" AS ENUM ('Administrador', 'Validador', 'Parceiro', 'UnidadeExecucaoProjeto');

-- CreateTable
CREATE TABLE "Utilizador" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "apelido" TEXT,
    "email" TEXT NOT NULL,
    "bloqueado" BOOLEAN DEFAULT false,
    "acesso" "Acesso" NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilizador_email_key" ON "Utilizador"("email");
