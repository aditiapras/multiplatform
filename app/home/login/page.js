import SignIn from "@/components/page/account/signin";
import { Toaster } from "sonner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SingInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-5 w-full">
      <Toaster richColors position="top-center" closeButton />
      <SignIn />
    </main>
  );
}
