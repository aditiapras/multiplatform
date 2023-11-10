"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Account({ data }) {
  const [checked, setChecked] = useState(false);
  const { register, handleSubmit } = useForm();

  return (
    <div className="col-span-5 flex flex-col">
      <p className="font-medium">Account</p>
      <p className="text-zinc-500 text-sm mt-3">
        Change your account settings.
      </p>
      <Separator className="my-5" />
      <div className="flex flex-col gap-5">
        <div className="grid gap-1 w-1/2 ">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <input
            id="name"
            placeholder="Name"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            {...register("name", { value: data?.username })}
          />
        </div>
        <div className="grid gap-1 w-1/2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <input
            id="email"
            placeholder="Email"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            {...register("email", { value: data?.email })}
          />
        </div>
        <div className="grid gap-1 w-full">
          <div className="flex items-center justify-between w-1/2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Switch checked={checked} onCheckedChange={setChecked} />
          </div>
          <div className="flex gap-3 w-full items-center">
            <input
              id="password"
              placeholder="Password"
              type="password"
              disabled={!checked}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all w-1/2"
            />
            {data?.oAuth === false && (
              <Button disabled={!checked} size="sm">
                Change Password
              </Button>
            )}
            {data?.oAuth === true && (
              <Button disabled={!checked} size="sm">
                Set Password
              </Button>
            )}
          </div>
          {data?.oAuth === false && (
            <p className="text-xs text-zinc-500 mt-2">Change your password</p>
          )}
          {!checked && data?.oAuth === true && (
            <p className="text-xs text-zinc-500 mt-2">
              You have been signed in with Google.
            </p>
          )}
          {checked && data?.oAuth === true && (
            <p className="text-xs text-zinc-500 mt-2">
              By setting a password you will be able to sign in with Google or
              Email.
            </p>
          )}
        </div>
        <Button className="w-fit">Save Changes</Button>
      </div>
    </div>
  );
}
