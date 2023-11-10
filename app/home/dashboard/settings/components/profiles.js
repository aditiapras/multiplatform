"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Select from "react-select";
import { codes } from "@/lib/countrycode";

export default function Profiles({ data }) {
  const { register, handleSubmit } = useForm();

  const countrycode = codes.map((item) => ({
    label: item.value + " " + item.label,
    value: item.value,
  }));

  const customStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      "&:hover": { borderColor: "#ea580c" },
      borderColor: state.isFocused ? "#ea580c" : "",
      outlineColor: "#ea580c",
      boxShadow: state.isFocused ? "0 0 0 1.5px #ea580c" : "#ea580c",
    }),
  };

  const customTheme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#fdba74",
      primary: "#ea580c",
    },
  });

  return (
    <div className="col-span-5 flex flex-col">
      <p className="font-medium">Profile</p>
      <p className="text-zinc-500 text-sm mt-3">
        Update your profile settings.
      </p>
      <Separator className="my-5" />
      <div className="flex flex-col gap-5">
        <div className="grid gap-1 w-1/2">
          <Label htmlFor="name" className="text-sm font-medium">
            Profile Picture
          </Label>
          <div className="flex items-center gap-5">
            <Avatar className="w-14 h-14">
              <AvatarImage src={data?.avatar} />
              <AvatarFallback className="text-xl font-medium bg-orange-500 text-white">
                {data?.username?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <Button variant="outline">Change</Button>
          </div>
        </div>
        <div className="grid gap-1 w-1/2 ">
          <Label htmlFor="name" className="text-sm font-medium">
            User ID
          </Label>
          <input
            id="ID"
            placeholder="ID"
            {...register("userId", { value: data?.userId })}
            readOnly
            disabled
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
          />
        </div>
        <div className="grid gap-1 w-1/2 ">
          <Label htmlFor="phoneNumber" className="text-sm font-medium">
            Phone Number
          </Label>
          <div className="flex gap-3 items-center">
            <Select
              options={countrycode}
              styles={customStyle}
              theme={customTheme}
              className="w-full text-xs h-10"
            />
            <input
              id="phoneNumber"
              placeholder="Phone Number"
              {...register("usphoneNumbererId", { value: data?.phoneNumber })}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
            />
          </div>
        </div>
        <div className="grid gap-1 w-1/2">
          <Label htmlFor="placeOfBirth" className="text-sm font-medium">
            Place of Birth
          </Label>
          <input
            id="placeOfBirth"
            placeholder="Place of Birth"
            {...register("placeOfBirth", { value: data?.placeOfBirth })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
          />
        </div>
        <div className="grid gap-1 w-1/2">
          <Label htmlFor="dateOfBirth" className="text-sm font-medium">
            Date of Birth
          </Label>
          <input
            id="dateOfBirth"
            type="date"
            placeholder="Date of Birth"
            {...register("dateOfBirth", { value: data?.dateOfBirth })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
          />
        </div>

        <Button className="w-fit">Save Changes</Button>
      </div>
    </div>
  );
}
