import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

import "server-only";

export const getPhotos = async () => {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const photos = await db.query.images.findMany({
    where: (photo, { eq }) => eq(photo.userId, user.userId),
    orderBy: (photo, { desc }) => [desc(photo.id)],
  });

  return photos;
};
