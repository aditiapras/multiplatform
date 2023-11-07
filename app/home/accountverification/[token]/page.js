"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

export default function Page({ params }) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      axios({
        method: "put",
        url: `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${params.token}&section=profile`,
        data: {
          userId: params.token,
          isVerified: true,
        },
      }).then((res) => {
        return res.data;
      });
      setShow(true);
    }, 5000);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen gap-5 items-center justify-center">
      {!show && (
        <p className="text-3xl flex gap-3 items-center">
          <Loader2Icon className="animate-spin h-8 w-8" /> Please wait...
        </p>
      )}
      {show && (
        <>
          <p className="text-3xl font-semibold">
            Congratulations, your account has been verified.
          </p>

          <Button onClick={() => router.push("/dashboard")}>
            Back to Dashboard
          </Button>
          <p className="text-zinc-500 text-xs">
            Thank you for registering on Lettre.id
          </p>
        </>
      )}
      <p className="absolute bottom-5 text-xs text-zinc-400">
        Reference ID: {params.token}
      </p>
    </div>
  );
}
