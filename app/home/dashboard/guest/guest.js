"use client";
import React from "react";
import DataTales from "@/components/ui/data-tables";
import { Button } from "@/components/ui/button";

import moment from "moment-timezone";
import { MoreHorizontal } from "lucide-react";

export default function Guest({ guest }) {
  const colums = [
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Invitation Link",
      accessorKey: "url",
    },
    {
      header: "Status",
      accessorKey: "invitationStatus",
      cell: (info) => {
        return (
          <p className="text-xs px-2 py-0.5 rounded-full border w-fit bg-blue-100 border-blue-500 text-blue-500">
            Not Sent
          </p>
        );
      },
    },
    {
      header: "Created At",
      accessorKey: "crated_at",
      cell: (info) => {
        return (
          <p className="font-mono">
            {moment(info.getValue()).format("DD MMM YYYY HH:mm")}
          </p>
        );
      },
    },
    {
      header: "Address",
      accessorKey: "address",
    },
    {
      header: "Phone Number",
      accessorKey: "phoneNumber",
    },
    {
      header: "Relationship",
      accessorKey: "relationship",
    },
    {
      header: "RSVP",
      accessorKey: "rsvp",
    },
    {
      header: "Action",
      cell: () => {
        return (
          <button className="w-fit rounded-md">
            <MoreHorizontal className="text-zinc-500 w-5 h-5" />
          </button>
        );
      },
    },
  ];
  return (
    <>
      <div className="flex gap-2 items-center">
        <Button className="w-fit">Add guest</Button>
        <Button className="w-fit bg-emerald-600 hover:bg-emerald-500">
          Import
        </Button>
        <p className="text-zinc-500 text-xs">
          *imported files should be in .csv or .xlsx format
        </p>
      </div>
      <DataTales data={guest} columns={colums} />
    </>
  );
}
