"use client";
import { useRouter } from "next/navigation";

export default function Links({ params }) {
  const router = useRouter();
  return (
    <div className="col-span-1 grid gap-5 h-fit">
      <button
        onClick={() => router.replace("/dashboard/settings")}
        className={
          !params
            ? "text-left text-sm font-medium"
            : "text-left text-sm text-zinc-500"
        }
      >
        Account
      </button>
      <button
        onClick={() => router.replace("/dashboard/settings?tab=profile")}
        className={
          params == "profile"
            ? "text-left text-sm font-medium"
            : "text-left text-sm text-zinc-500"
        }
      >
        Profile
      </button>
      <button
        onClick={() => router.replace("/dashboard/settings?tab=subscriptions")}
        className={
          params == "subscriptions"
            ? "text-left text-sm font-medium"
            : "text-left text-sm text-zinc-500"
        }
      >
        Subscriptions
      </button>
    </div>
  );
}
