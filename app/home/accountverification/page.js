import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SendEmail from "./send";
import { Toaster } from "sonner";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <Toaster position="top-center" closeButton />
      <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
        <p className="text-5xl font-semibold">Lettré</p>
        <p className="text-xs -mt-5 text-zinc-500">Account Verification</p>
        <SendEmail
          userId={session?.user.id}
          email={session?.user.email}
          username={session?.user.name}
        />
      </div>
    </>
  );
}
