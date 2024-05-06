import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { SelectImage } from "./db/schema";

import "server-only";

export const getImages = async (): Promise<SelectImage[]> => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (photo, { eq }) => eq(photo.userId, user.userId),
    orderBy: (photo, { desc }) => [desc(photo.id)],
  });

  return images;
};

export const getImage = async (imageId: number): Promise<SelectImage> => {
  if (isNaN(imageId)) throw new Error("Invalid imageId");

  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (photo, { eq, and }) =>
      and(eq(photo.userId, user.userId), eq(photo.id, imageId)),
  });

  if (!image) throw new Error("Image not found");

  return image;
};
