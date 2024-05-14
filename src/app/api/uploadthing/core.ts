import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { ratelimit } from "~/server/ratelimit";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  imageGallery: f({ image: { maxFileSize: "1MB" } })
    .middleware(async () => {
      const user = auth();

      if (!user.userId)
        throw new UploadThingError("You must be logged in to upload an image");

      const { success } = await ratelimit.limit(user.userId);

      if (!success) throw new UploadThingError("Rate Limited");

      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const submittedImage = await db
        .insert(images)
        .values({
          url: file.url,
          name: file.name,
          userId: metadata.userId,
        })
        .returning();

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return {
        uploadedBy: metadata.userId,
        image: JSON.stringify(submittedImage[0]),
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
