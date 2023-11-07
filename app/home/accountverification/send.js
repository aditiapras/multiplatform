"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";

export default function SendEmail({ userId, email, username }) {
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = async () => {
    setDisabled(true);
    setTimeout(() => {
      const data = axios({
        method: "post",
        url: `${process.env.NEXT_PUBLIC_FETCH_URL}/emails`,
        data: {
          email,
          userId,
          username,
        },
      }).then((res) => {
        return res.data;
      });
      toast.success("Email sent!");
      setDisabled(false);
      setShow(true);
    }, 5000);
  };

  return (
    <div className="flex flex-col gap-5 items-center">
      <Button
        className="w-fit disabled:cursor-not-allowed"
        type="submit"
        disabled={disabled}
        onClick={handleSubmit}
      >
        {disabled ? (
          <p className="flex gap-1 items-center">
            <LoaderIcon className="animate-spin h-4 w-4" />
            Sending Email
          </p>
        ) : (
          "Send Email Verification"
        )}
      </Button>

      {show && (
        <p className="text-xs text-zinc-500">
          Email has been sent to <span className="text-blue-500">{email}</span>,
          please check your inbox or spam folder.
        </p>
      )}
      {show && (
        <p className="text-xs text-zinc-500">
          Didn{"'"}t receive the email? send email verification again
        </p>
      )}
    </div>
  );
}
