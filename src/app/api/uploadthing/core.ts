import { createUploadthing, type FileRouter } from "uploadthing/next";
import { verifyJWT } from "@/lib/auth/session";
import { cookies } from "next/headers";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const cookieStore = await cookies();
      const token = cookieStore.get("auth-token")?.value;

      if (!token) throw new Error("Unauthorized");

      try {
        const user = await verifyJWT(token);
        // Whatever is returned here is accessible in onUploadComplete as `metadata`
        return { userId: user.userId };
      } catch (e) {
        throw new Error("Unauthorized");
      }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside onClientUploadComplete callback
      return { uploadedBy: metadata.userId };
    }),

  videoUploader: f({ video: { maxFileSize: "128MB", maxFileCount: 1 } })
    .middleware(async () => {
      const cookieStore = await cookies();
      const token = cookieStore.get("auth-token")?.value;
      if (!token) throw new Error("Unauthorized");
      
      const user = await verifyJWT(token);
      return { userId: user.userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Video upload complete:", file.url);
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
