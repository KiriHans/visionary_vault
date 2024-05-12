"use server";
// import "server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { SelectImage, images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { IMAGES_PER_PAGE } from "~/config/constants";
import { revalidatePath } from "next/cache";

export const getImages = async (
  limit: number = IMAGES_PER_PAGE,
  offset: number = 0,
): Promise<SelectImage[]> => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (photo, { eq }) => eq(photo.userId, user.userId),
    orderBy: (photo, { desc }) => [desc(photo.id)],
    limit: limit,
    offset: offset,
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
export const deleteImage = async (imageId: number): Promise<void> => {
  if (isNaN(imageId)) throw new Error("Invalid image id");

  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.userId, user.userId), eq(images.id, imageId)));

  revalidatePath("/");
  // redirect("/");
};
