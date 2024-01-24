/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `PasswordResetModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetModel_token_key" ON "PasswordResetModel"("token");
