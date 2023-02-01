-- CreateTable
CREATE TABLE "Utilizador" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "bloqueado" BOOLEAN NOT NULL DEFAULT false,
    "acesso" INTEGER NOT NULL,
    "pass" BYTEA NOT NULL,

    CONSTRAINT "Utilizador_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilizador_nome_key" ON "Utilizador"("nome");
