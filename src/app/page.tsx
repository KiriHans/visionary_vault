
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { SimpleGallery } from "./_components/SimpleGallery";
import { TopNav } from "./_components/TopNav";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="p-10">
        <SignedIn>

          <SimpleGallery></SimpleGallery>
        </SignedIn>
        <SignedOut>
          <div className="w-auto text-2xl">
            Please <span className="font-bold"><SignInButton /></span> to save your favorite images in the vault.

          </div>
        </SignedOut>
      </main>
    </>
  );
}
