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
import { Eye, EyeOff, Loader2, MailOpen } from "lucide-react";
import { PiFlowerBold } from "react-icons/pi";
import Link from "next/link";
import axios from "axios";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !name) {
      toast.error("Please fill in all fields");
    } else {
      try {
        setDisabled(true);
        setTimeout(async () => {
          const query = {
            username: name,
            email,
            password,
          };
          const res = axios({
            method: "post",
            url: `${process.env.NEXT_PUBLIC_FETCH_URL}/register`,
            data: query,
          }).then((res) => {
            return res.data;
          });

          const data = await res;
          const isRegistered = data.isRegistered;

          if (isRegistered === false) {
            toast.error("User with this email is already exist");
          } else {
            toast.success("Successfully registered.");
            setName("");
            setEmail("");
            setPassword("");
            setPasswordValidate("");
          }
          setDisabled(false);
        }, 2000);
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <Card className="w-full sm:w-[500px] border-none shadow-none">
      <CardHeader>
        <MailOpen className="h-10 w-10 text-blue-700 mb-5" />
        <CardTitle>
          <span className="font-normal">Sign up to</span> Léttre.id
        </CardTitle>
        <CardDescription className="text-base">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700 hover:underline">
            Sign in
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 w-full">
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              type="name"
              id="name"
              value={name}
              placeholder="Full Name"
              required
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              required
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <div className="w-full flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <button type="button" onClick={() => setVisible(!visible)}>
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
            <Input
              type={visible ? "text" : "password"}
              id="password"
              value={password}
              required
              placeholder="Password"
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="passwordValidate">Re-type Password</Label>
            <Input
              type={visible ? "text" : "password"}
              id="passwordValidate"
              value={passwordValidate}
              required
              placeholder="Re-type Password"
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all relative"
              onChange={(e) => {
                setValid(e.target.value);
                setPasswordValidate(e.target.value);
              }}
            />
            {valid !== password && valid && password && (
              <p className="text-xs mt-3 text-red-500 relative">
                Password does not match
              </p>
            )}
          </div>
          <Button className="w-full text-base flex gap-2" disabled={disabled}>
            {disabled && <Loader2 className="animate-spin" />} Create Account
          </Button>
        </form>
        <div className="flex gap-2 items-center justify-center w-full mt-5">
          <Separator className="w-1/3" />{" "}
          <p className="w-full text-muted-foreground text-xs text-center">
            OR SIGN UP WITH{" "}
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
