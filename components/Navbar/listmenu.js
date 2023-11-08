"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ListMenu() {
  const pathname = usePathname();
  return (
    <>
      <Link
        href={`/dashboard`}
        className={`px-3 py-1 text-sm text-zinc-500 rounded-sm hover:bg-zinc-100 transition ${
          pathname === "/dashboard"
            ? "underline underline-offset-[16.5px] decoration-[1.5px] decoration-blue-500 text-zinc-900 font-medium"
            : ""
        } `}
      >
        Overview
      </Link>
      <Link
        href={`/dashboard/details`}
        className={`px-3 py-1 text-sm text-zinc-500 rounded-sm hover:bg-zinc-100 transition ${
          pathname === "/dashboard/details"
            ? "underline underline-offset-[16.5px] decoration-[1.5px] decoration-blue-500 text-zinc-900 font-medium"
            : ""
        } `}
      >
        Wedding Details
      </Link>
      <Link
        href={`/dashboard/guest`}
        className={`px-3 py-1 text-sm text-zinc-500 rounded-sm hover:bg-zinc-100 transition ${
          pathname === "/dashboard/guest"
            ? "underline underline-offset-[16.5px] decoration-[1.5px] decoration-blue-500 text-zinc-900 font-medium"
            : ""
        } `}
      >
        Guest Management
      </Link>
      <Link
        href={`/dashboard/settings`}
        className={`px-3 py-1 text-sm text-zinc-500 rounded-sm hover:bg-zinc-100 transition ${
          pathname === "/dashboard/settings"
            ? "underline underline-offset-[16.5px] decoration-[1.5px] decoration-blue-500 text-zinc-900 font-medium"
            : ""
        }`}
      >
        Settings
      </Link>
    </>
  );
}
