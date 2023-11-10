"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, MailIcon, MailOpen } from "lucide-react";
import { PiFlowerBold } from "react-icons/pi";
import Link from "next/link";
import axios from "axios";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
    } else {
      try {
        setDisabled(true);
        setTimeout(async () => {
          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
          if (res.error) {
            console.log(res.error);
            toast.error(
              "Wrong Email/Password. Or if you have sign up with google, please sign in with your Google account instead."
            );

            setDisabled(false);
          } else {
            toast.success(
              "Please wait, You are being redirected to dashboard."
            );
            setTimeout(() => {
              router.push("/dashboard");
            }, 2000);
          }
        }, 2000);
      } catch (error) {
        // console.log("Something went wrong");
      }
    }
  };
  return (
    <Card className="w-full sm:w-[500px] border-none shadow-none bg-zinc-50">
      <CardHeader>
        {/* <div className="w-full flex items-center justify-center mb-10"> */}
        <MailOpen className="h-10 w-10 text-blue-700 mb-5" />
        {/* </div> */}
        <CardTitle>
          <span className="font-normal">Sign in to</span>{" "}
          <a href="/">Léttre.id</a>
        </CardTitle>
        <CardDescription className="text-base">
          Dont have account?{" "}
          <a href="/register" className="text-blue-700 hover:underline">
            Sign up
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 w-full">
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="w-full relative">
              <Input
                type={visible ? "text" : "password"}
                id="password"
                required
                placeholder="Password"
                className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-3"
                onClick={() => setVisible(!visible)}
              >
                <EyeOff
                  className={`h-5 w-5 absolute ${
                    !visible && "scale-0"
                  } transition-all `}
                />
                <Eye
                  className={`h-5 w-5 ${
                    !visible && "scale-100"
                  } transition-all scale-0`}
                />
              </button>
            </div>
          </div>
          <Button className="w-full text-base flex gap-2" disabled={disabled}>
            {disabled && <Loader2 className="animate-spin" />} Sign In
          </Button>
        </form>
        <div className="flex gap-2 items-center justify-center w-full mt-5">
          <Separator className="w-1/3" />{" "}
          <p className="w-full text-muted-foreground text-xs text-center">
            OR CONTINUE WITH{" "}
          </p>
          <Separator className="w-1/3" />
        </div>
        <div className="flex w-full gap-5 mt-5">
          {/* <Button variant="outline" className="w-full flex gap-2">
            <FaGithub />
            Github
          </Button> */}
          <Button
            variant="outline"
            className="w-full flex gap-2"
            onClick={() => signIn("google")}
          >
            <FcGoogle />
            Google
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
