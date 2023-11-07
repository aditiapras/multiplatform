import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  return (
    <main
      className={`${inter.className} flex flex-col min-h-screen w-full items-center`}
    >
      <nav className="w-full flex justify-between items-center h-20 bg-background/80 px-10 z-10 backdrop-blur-sm shadow-sm">
        <div className="flex gap-10 items-center">
          <p className="text-2xl font-medium">lettre</p>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center group">
              <p className="text-sm group-hover:text-orange-500 hidden md:block">
                Products
              </p>
              <ChevronDown className="h-4 w-4 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300 hidden md:block" />
            </div>
            <div className="flex gap-2 items-center group">
              <p className="text-sm group-hover:text-orange-500 hidden md:block">
                Features
              </p>
              <ChevronDown className="h-4 w-4 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300 hidden md:block" />
            </div>
            <div className="flex gap-2 items-center group">
              <p className="text-sm group-hover:text-orange-500 hidden md:block">
                Contact
              </p>
              <ChevronDown className="h-4 w-4 group-hover:text-orange-500 group-hover:rotate-180 transition-all duration-300 hidden md:block" />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Start for free</Link>
          </Button>
        </div>
      </nav>
      <section className="relative w-full flex flex-col gap-5 items-center justify-center min-h-screen -mt-20 bg-gradient-to-b from-white to-white">
        <div className="relative w-full px-10 lg:px-0 lg:w-2/3 h-full flex flex-col gap-5">
          <div className="absolute animate-pulse bottom-0 right-28 w-60 h-60 bg-gradient-to-br from-pink-500/70 to-orange-500/70 blur-3xl rounded-full"></div>
          <div className="absolute animate-spin top-0 left-0 w-20 h-20 bg-gradient-to-br from-emerald-500 to-purple-500 blur-3xl rounded-full"></div>
          <p
            className={`relative text-5xl md:text-7xl font-semibold text-zinc-800 lg:w-2/3`}
          >
            Invitation letter built for everyone.
          </p>
          <p className="relative text-zinc-500">
            Meet Lettre – an easier way to accelerate your invitation letter.
            Free up to 500 guests.
          </p>
          <Link
            href={"/login"}
            className="relative group text-sm font-medium flex gap-2 items-center w-fit border border-zinc-900 hover:border-orange-500 rounded-full px-5 py-2 mt-5 transition-all duration-200"
          >
            Get started{" "}
            <ChevronRight className="h-4 w-4 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-300" />
          </Link>
          {/* <Button className="w-fit mt-10 rounded-full">Get started</Button> */}
        </div>
      </section>
    </main>
  );
}
