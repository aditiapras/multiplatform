"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <div>
      <button onClick={() => signOut()} className="flex items-center">
        <LogOut className="h-6 w-6 hover:text-red-600" />
      </button>
    </div>
  );
}
