import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Guest from "./guest";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  const { guest } = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${userId}`
  ).then((res) => res.json());
  console.log(guest);

  return (
    <main className="w-full flex flex-col px-7 pt-5 pb-20 bg-zinc-50">
      <div className="flex flex-col gap-5 w-3/4 mx-auto mt-5">
        <p className="font-semibold text-xl">Guest</p>
        <p className="text-zinc-500 text-sm -mt-4">
          All your guest will be displayed here.
        </p>
        <div className="w-full flex flex-col gap-2">
          {/* <p className="text-zinc-500">No guest found.</p> */}
          <Guest guest={guest} />
        </div>
      </div>
    </main>
  );
}
