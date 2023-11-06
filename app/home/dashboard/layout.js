import Navbar from "@/components/Navbar/navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar session={session} />
      {children}
    </div>
  );
}
