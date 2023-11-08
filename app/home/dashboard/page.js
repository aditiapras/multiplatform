import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailOpen, MailPlus, Pencil } from "lucide-react";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  const users = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${userId}`
  ).then((res) => res.json());

  const isVerified = users.isVerified;

  return (
    <main className="w-full flex flex-col px-7 pt-5 pb-20 bg-zinc-50">
      <div className="flex flex-col gap-5 w-3/4 mx-auto mt-5">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-2xl">Welcome to lettre.id</p>
          {isVerified === false && (
            <div className="flex items-end gap-1">
              <p className="text-zinc-500 font-medium text-xs flex gap-1">
                Seems like you haven{"'"}t verified your email yet,
                <a
                  href={`${process.env.NEXTAUTH_URL}/accountverification?token=${userId}`}
                  className="hover:underline text-blue-500"
                >
                  Verify your email.
                </a>
              </p>
            </div>
          )}
        </div>
        <p className="text-zinc-500">
          Let{"'"}s setup your first invitation letter.
        </p>
        <div className="grid grid-cols-2 gap-5 items-center w-full">
          <div className="border p-5 rounded-md bg-white flex flex-col gap-5 w-full">
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
          {/* <div className="border p-5 rounded-md bg-white flex flex-col gap-5 w-full">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-sky-200 border-sky-500 animate-pulse">
              <Pencil className="text-sky-500" />
            </div>
            <p className="font-semibold text-lg">Manage your invitation</p>
            <p className="text-zinc-500">Manage and edit your invitation.</p>
            <Button className="w-fit" asChild>
              <Link href="/dashboard/guest">Manage your invitation</Link>
            </Button>
          </div> */}
          <div className="border p-5 rounded-md bg-white flex flex-col gap-5 w-full">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center bg-orange-200 border-orange-500 animate-pulse">
              <MailOpen className="text-orange-500" />
              {/* <Pencil className="text-sky-500" /> */}
            </div>
            <p className="font-semibold text-lg hover:underline">
              <span className="text-orange-500">aningadit</span>.lettre.id
            </p>
            <p className="text-zinc-500">
              This is your invitation link. Start customizing your invitation
              now.
            </p>
            <div className="flex items-center gap-5">
              <Button className="w-fit" asChild>
                <Link href="/dashboard/details">Edit wedding details</Link>
              </Button>
              <Button className="w-fit" asChild>
                <Link href="/dashboard/guest">Add guest</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
