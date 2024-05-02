import Link from "next/link";
import Gallery from "./_components/Gallery";
import { ModeToggle } from "./_components/ModeToggle";



export default function HomePage() {
  return (
    <main className="p-10">
      <Gallery></Gallery>
    </main>
  );
}
