import { api, HydrateClient } from "~/trpc/server";
import KapookleDictionary from "./_components/KapookleDictionary";
import { Cormorant_Garamond } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default async function Home() {
  void api.post.getLatest.prefetch();

  const currentYear = new Date().getFullYear();

  return (
    <HydrateClient>
      <main
        className={`flex min-h-screen flex-col items-center justify-between bg-gradient-to-br from-[#f8f4e9] to-[#e6dfd0] text-[#2c2c2c] ${cormorantGaramond.className}`}
      >
        <div className="absolute inset-0 bg-[url('/elegant-pattern.svg')] opacity-5"></div>
        <div className="container relative z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="mb-8 text-6xl font-light tracking-wide">
            The Lexicon of Refinement
          </h1>
          <div className="rounded-lg bg-white bg-opacity-80 p-8 shadow-xl backdrop-blur-sm">
            <KapookleDictionary />
          </div>
          <footer className="mt-12 text-center text-sm text-gray-600">
            <p>
              &ldquo;Elegance is the only beauty that never fades.&rdquo;
              &mdash; Audrey Hepburn
            </p>
          </footer>
        </div>
        <div className="w-full bg-white bg-opacity-50 py-4 text-center text-sm text-gray-600">
          &copy; {currentYear} The Kapookle Foundation (A Merriam-Webster
          Corporation)
        </div>
      </main>
    </HydrateClient>
  );
}
