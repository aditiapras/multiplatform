"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { editDetails } from "@/lib/actions";
import { MapPinIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment-timezone";
import { useRouter } from "next/navigation";

export default function FormDetail({ weddingDetails, userId }) {
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const body = {
      ...data,
      userId,
    };
    editDetails(body);
    setDisabled(!disabled);
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-5 justify-end items-end relative">
      <Button
        onClick={() => setDisabled(!disabled)}
        className={`w-fit absolute -top-28 ${disabled ? "" : "bg-emerald-600"}`}
        // disabled={!disabled}
      >
        {disabled ? "Edit" : "Save Changes"}
      </Button>
      <form
        className="flex flex-col gap-10 w-full mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 w-full gap-5">
          <p className="font-semibold text-xl">Brides Detail</p>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="bridesName" className="text-zinc-400">
              Brides Name
            </label>
            <input
              type="text"
              id="bridesName"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("bridesName", {
                value: weddingDetails?.bridesName,
              })}
              disabled={disabled}
              placeholder="Brides Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="brides_fathers_name" className="text-zinc-400">
              Father Brides Name
            </label>
            <input
              type="text"
              id="brides_fathers_name"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("brides_fathers_name", {
                value: weddingDetails?.brides_fathers_name,
              })}
              disabled={disabled}
              placeholder="Father Brides Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="brides_mothers_name" className="text-zinc-400">
              Mother Brides Name
            </label>
            <input
              type="text"
              id="brides_mothers_name"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("brides_mothers_name", {
                value: weddingDetails?.brides_mothers_name,
              })}
              disabled={disabled}
              placeholder="Mother Brides Name"
            />
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 w-full gap-5">
          <p className="font-semibold text-xl">Grooms Detail</p>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="bridesName" className="text-zinc-400">
              Grooms Name
            </label>
            <input
              type="text"
              id="groomsName"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("groomsName", {
                value: weddingDetails?.groomsName,
              })}
              disabled={disabled}
              placeholder="Grooms Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="grooms_fathers_name" className="text-zinc-400">
              Father Grooms Name
            </label>
            <input
              type="text"
              id="grooms_fathers_name"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("grooms_fathers_name", {
                value: weddingDetails?.grooms_fathers_name,
              })}
              disabled={disabled}
              placeholder="Father Grooms Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="grooms_mothers_name" className="text-zinc-400">
              Mother Grooms Name
            </label>
            <input
              type="text"
              id="grooms_mothers_name"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("grooms_mothers_name", {
                value: weddingDetails?.grooms_mothers_name,
              })}
              disabled={disabled}
              placeholder="Mother Grooms Name"
            />
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-2 w-full gap-5">
          <p className="font-semibold text-xl col-span-2">Wedding Day</p>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_date" className="text-zinc-400">
              Wedding Date
            </label>
            <input
              type="date"
              id="wedding_date"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("wedding_date", {
                value: moment(weddingDetails?.wedding_date).format(
                  "YYYY-MM-DD"
                ),
              })}
              disabled={disabled}
              placeholder="weddings Date"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_time" className="text-zinc-400">
              Wedding Time
            </label>
            <input
              type="time"
              id="wedding_time"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("wedding_time", {
                value: weddingDetails?.wedding_time,
              })}
              disabled={disabled}
              placeholder="weddings Time"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="akad_date" className="text-zinc-400">
              Akad Date
            </label>
            <input
              type="date"
              id="akad_date"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("akad_date", {
                value: moment(weddingDetails?.akad_date).format("YYYY-MM-DD"),
              })}
              disabled={disabled}
              placeholder="akad Date"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="akad_time" className="text-zinc-400">
              Akad Time
            </label>
            <input
              type="time"
              id="akad_time"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("akad_time", {
                value: weddingDetails?.akad_time,
              })}
              disabled={disabled}
              placeholder="akad Time"
            />
          </div>
        </div>

        <Separator />

        <div className="col-span-3 grid w-full items-center gap-5">
          <p className="font-semibold text-xl">Wedding Location</p>
          <div className="grid gap-1.5">
            <label htmlFor="wedding_location" className="text-zinc-400">
              Address
            </label>
            <input
              type="text"
              id="wedding_location"
              className="p-2 border rounded-md focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:outline-zinc-400 transition-all text-sm disabled:opacity-70"
              required
              {...register("wedding_location", {
                value: weddingDetails?.wedding_location,
              })}
              disabled={disabled}
              placeholder="Wedding Location"
            />
          </div>
          <Button
            type="button"
            className="w-fit flex gap-2 text-xs bg-emerald-600 hover:bg-emerald-600/90"
            size="sm"
          >
            Pick from maps <MapPinIcon className="w-4 h-4" />
          </Button>
        </div>
        <Separator />
        <Button className="w-fit" asChild>
          <button type="submit">Save Changes</button>
        </Button>
      </form>
    </div>
  );
}
