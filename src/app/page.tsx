
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SimpleGallery } from "./_components/SimpleGallery";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="p-10">
      <SignedIn>
        <SimpleGallery></SimpleGallery>
      </SignedIn>
      <SignedOut>
        <div className="w-auto text-2xl">
          Please <span className="font-bold">Sign In</span> to save your favorite images in the vault

        </div>
      </SignedOut>
    </main>
  );
}
