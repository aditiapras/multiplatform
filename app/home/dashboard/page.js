import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
// import { useServerFetch } from "@/lib/fetcher/server-side-fetch";
// import ConnectWithGoogle from "@/components/page/account/connectGoogle";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  const userId = session?.user.id;
  // const profile = await useServerFetch(
  //   `http://localhost:3000/api/users?id=${userId}`
  // );

  // const hasPassword = profile.accountVerified;

  return (
    <main className="w-full flex flex-col px-7 py-5 bg-zinc-50">
      <p className="font-semibold text-lg">Overview</p>

      {/* {!hasPassword && (
        <div className="flex space-x-1 px-2 text-sm rounded-full w-fit mt-5 bg-blue-100 text-blue-500">
          <p>
            Attention! Your are currently signup with Google Account, if you
            want to connect with your account using a password. Please set your
            password
          </p>
          <Link href={"/dashboard/settings"} className="underline">
            here.
          </Link>
        </div>
      )}
      {profile.connectWithGoogle == false ? <ConnectWithGoogle /> : ""} */}
    </main>
  );
}
