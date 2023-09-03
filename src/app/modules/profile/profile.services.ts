import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getProfile = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });

  return result;
};

export const ProfileService = {
  getProfile,
};
