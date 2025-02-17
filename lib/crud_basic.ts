"use server";
import { prisma } from "./db";

interface User {
  name: string;
  // age: number;
  email: string;
  image: string;
}

export async function createUser({ name, email, image }: User) {
  await prisma.user.create({
    data: {
      name,
      email,
      image,
    },
  });

  console.log(`User created successfully`);
}

export async function readUser() {
  return await prisma.user.findMany();
}

export async function updateUserImage({ email, image }: User) {
  prisma.user.update({
    where: { email },
    data: {
      image,
    },
  });
}

export async function deleteUser({ email }: User) {
  prisma.user.delete({
    where: { email },
  });
}

export async function findUserByName(name: string) {
  return await prisma.user.findMany({
    where: { name },
  });
}
