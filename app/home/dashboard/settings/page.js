import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Links from "./components/links";

export default function Page({ searchParams }) {
  const { tab } = searchParams;
  return (
    <main className="w-full flex flex-col px-7 pt-5 pb-20 bg-zinc-50">
      <div className="flex flex-col gap-5 w-3/4 mx-auto mt-5">
        <p className="font-semibold text-xl">Settings</p>
        <p className="text-zinc-500 text-sm -mt-4">
          Settings and options for your account.
        </p>
        <div className="grid grid-cols-6 mt-5">
          <Links params={tab} />
          <div className="col-span-5 flex flex-col">
            <p className="font-medium">Account</p>
            <p className="text-zinc-500 text-sm mt-3">
              Update your account settings.
            </p>
            <Separator className="my-5" />
            <div className="flex flex-col gap-5">
              <div className="grid gap-1 w-1/2 ">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Name"
                  className="focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-orange-500 transition-all"
                />
              </div>
              <div className="grid gap-1 w-1/2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Email"
                  className="focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-orange-500 transition-all"
                />
              </div>
              <div className="grid gap-1 w-1/2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  disabled
                  className="focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-orange-500 transition-all"
                />
                <p className="text-xs text-zinc-500 mt-2">
                  You have been sign in with Google.
                </p>
              </div>
              <Button className="w-fit">Save Changes</Button>
            </div>
          </div>
          {/* <p className="text-zinc-500">No guest found.</p> */}
        </div>
      </div>
    </main>
  );
}
