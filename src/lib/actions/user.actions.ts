import { db } from "@/lib/db";

interface UserProps {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const createUser = async ({ clerkId, email, firstName, lastName }: UserProps) => {
  const user = await db.user.create({
    data: {
      clerkId,
      email,
      firstName,
      lastName,
    },
  });

  return user;
};

export const getUserByClerkId = async (clerkId: string) => {
  const user = await db.user.findFirst({
    where: {
      clerkId,
    },
  });

  return user;
};