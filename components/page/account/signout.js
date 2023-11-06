"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div>
      <button
        onClick={() => signOut()}
        className="flex items-center bg-zinc-50 rounded-full border p-1 hover:bg-zinc-200"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </div>
  );
}
