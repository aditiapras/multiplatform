"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FormDetail({ weddingDetails }) {
  const [disabled, setDisabled] = useState(true);
  return (
    <div className="flex flex-col gap-5 justify-end items-end relative">
      <Button
        onClick={() => setDisabled(!disabled)}
        className="w-fit absolute -top-28"
        // disabled={!disabled}
      >
        Edit
      </Button>
      <form className="grid grid-cols-3 gap-5 w-full mt-5">
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="bridesName">Bride{"'"}s Name</label>
          <Input
            type="text"
            id="bridesName"
            placeholder="Bride's Name"
            value={weddingDetails.bridesName}
            required
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="groomsName">Groom{"'"}s Name</label>
          <Input
            type="text"
            id="groomsName"
            placeholder="Groom's Name"
            value={weddingDetails.groomsName}
            required
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="father_brides_name">Father Bride{"'"}s Name</label>
          <Input
            type="text"
            id="father_brides_name"
            placeholder="Father Bride's Name"
            required
            value={weddingDetails.brides_fathers_name}
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="mother_brides_name">Mother Bride{"'"}s Name</label>
          <Input
            type="text"
            id="mother_brides_name"
            placeholder="Mother Bride's Name"
            required
            value={weddingDetails.brides_mothers_name}
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="father_grooms_name">Father Groom{"'"}s Name</label>
          <Input
            type="text"
            id="father_grooms_name"
            placeholder="Father Groom's Name"
            required
            value={weddingDetails.grooms_fathers_name}
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <label htmlFor="mother_grooms_name">Mother Groom{"'"}s Name</label>
          <Input
            type="text"
            id="mother_grooms_name"
            placeholder="Mother Groom's Name"
            value={weddingDetails.grooms_mothers_name}
            required
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>

        {/* DATE */}
        <div className="col-span-3 grid grid-cols-2 gap-3">
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_date">Wedding Date</label>
            <Input
              type="date"
              id="wedding_date"
              placeholder="Wedding Date"
              required
              disabled={disabled}
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_date">Wedding time</label>
            <Input
              type="time"
              id="wedding_date"
              placeholder="Wedding Time"
              required
              disabled={disabled}
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_date">Akad Date</label>
            <Input
              type="date"
              id="akad_date"
              placeholder="Akad Date"
              required
              disabled={disabled}
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <label htmlFor="wedding_date">Akad time</label>
            <Input
              type="time"
              id="akad_time"
              placeholder="Akad Time"
              required
              disabled={disabled}
              className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
            />
          </div>
        </div>
        <div className="col-span-3 grid w-full items-center gap-1.5">
          <label htmlFor="wedding_date">Wedding Location</label>
          <Input
            type="text"
            id="wedding_location"
            placeholder="Jalan Proklamasi No.45"
            required
            disabled={disabled}
            className="focus-visible:ring-offset-0 focus-visible:ring-zinc-500 transition-all"
          />
        </div>
        <Button type="submit" className="w-fit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
