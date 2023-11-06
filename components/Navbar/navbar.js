import Logout from "../page/account/signout";
import { PiFlowerBold } from "react-icons/pi";
import ListMenu from "./listmenu";
import { Bell } from "lucide-react";
import Image from "next/image";

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
    <nav className="w-full flex flex-col border-b bg-white/80 backdrop-blur-sm sticky top-0">
      <div className="flex items-center justify-between px-7 h-16">
        <div className="flex gap-2 items-center">
          <PiFlowerBold className="text-2xl" />
          <p className="text-2xl font-semibold">Lettre</p>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-muted-foreground hover:text-foreground">Help</p>
          {/* <button className="border rounded-full p-1 hover:bg-zinc-100 ">
            <Bell className="h-5 w-5" />
          </button> */}
          <p className="font-medium">Hi, {username}</p>
          {(avatar == null || avatar == "") && (
            <div className="p-1 border rounded-full flex items-center justify-center bg-orange-500 hover:bg-orange-400">
              <p className="w-5 h-5 flex items-center justify-center text-white">
                {username?.charAt(0)}
              </p>
            </div>
          )}

          {avatar != null && avatar != "" && (
            <div className="border rounded-full flex items-center justify-center overflow-hidden w-[30px] h-[30px] hover:outline outline-2 outline-emerald-500 transition-all">
              <Image src={avatar} alt={username} width={30} height={30} />
            </div>
          )}

          <Logout />
        </div>
      </div>
      <div className="flex w-full px-5 py-2">
        <ListMenu />
      </div>
    </nav>
  );
}
