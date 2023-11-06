import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailPlus, Pencil } from "lucide-react";
// import { useServerFetch } from "@/lib/fetcher/server-side-fetch";
// import ConnectWithGoogle from "@/components/page/account/connectGoogle";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id;

  return (
    <main className="w-full flex flex-col px-7 py-5 bg-zinc-50">
      <div className="flex flex-col gap-5 w-3/4 mx-auto mt-5">
        <p className="font-semibold text-2xl">Welcome to lettre.id</p>
        <p className="text-zinc-500">
          Let{"'"}s setup your first invitation letter.
        </p>
        <div className="flex gap-5 items-center w-full">
          <div className="border p-5 rounded-md bg-white flex flex-col gap-5 w-1/2">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-emerald-200 border-emerald-500 animate-pulse">
              <MailPlus className="text-emerald-500" />
            </div>
            <p className="font-semibold text-lg">
              Create your first invitation
            </p>
            <p className="text-zinc-500">
              Create a fully managed invitation just in 10 minutes.
            </p>
            <Button className="w-fit" asChild>
              <Link href="/dashboard/details">Create new invitation</Link>
            </Button>
          </div>
          <div className="border p-5 rounded-md bg-white flex flex-col gap-5 w-1/2">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-sky-200 border-sky-500 animate-pulse">
              <Pencil className="text-sky-500" />
            </div>
            <p className="font-semibold text-lg">Manage your invitation</p>
            <p className="text-zinc-500">Manage and edit your invitation.</p>
            <Button className="w-fit" asChild>
              <Link href="/dashboard/guest">Manage your invitation</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
