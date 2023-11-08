import Logout from "../page/account/signout";
import { PiFlowerBold } from "react-icons/pi";
import ListMenu from "./listmenu";
import { Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Navbar({ session }) {
  const username = session?.user.name;
  const userId = session?.user.id;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${userId}`
  ).then((res) => {
    return res.json();
  });
  const avatar = data.avatar;
  return (
    <nav className="w-full flex flex-col border-b bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-10 h-20">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-semibold">Lettré</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-muted-foreground hover:text-foreground font-light text-sm">
            Help
          </p>

          <p className="font-light text-sm">{username}</p>

          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback className="text-xl font-medium bg-orange-500 text-white">
              {username?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <Logout />
        </div>
      </div>
      <div className="flex w-full px-10 py-2">
        <ListMenu />
      </div>
    </nav>
  );
}
