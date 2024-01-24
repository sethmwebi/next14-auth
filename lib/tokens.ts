import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { db } from "./db";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { v4 as uuidV4 } from "uuid";
import crypto from "crypto";

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const existingToken = await getTwoFactorTokenByEmail(email);

  if (existingToken) {
    await db.twoFactorToken.delete({
      where: { id: existingToken.id }
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return twoFactorToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidV4();

  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getPasswordResetTokenByToken(email);

  if (existingToken) {
    await db.passwordResetModel.delete({
      where: { id: existingToken.id }
    });
  }

  const passwordResetToken = await db.passwordResetModel.create({
    data: {
      email,
      token,
      expires
    }
  });

  return passwordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidV4();

  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  });

  return verificationToken;
};
