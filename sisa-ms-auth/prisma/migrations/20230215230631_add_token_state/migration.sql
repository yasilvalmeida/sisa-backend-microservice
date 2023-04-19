-- CreateEnum
CREATE TYPE "EstadoToken" AS ENUM ('PorValidar', 'Validado', 'Rejeitado');

-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "estado" "EstadoToken" DEFAULT 'PorValidar';
