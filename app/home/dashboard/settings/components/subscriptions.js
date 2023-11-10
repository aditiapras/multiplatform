import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";

export default function Subscriptions({ data }) {
  return (
    <div className="col-span-5 flex flex-col">
      <p className="font-medium">Subscriptions</p>
      <p className="text-zinc-500 text-sm mt-3">
        Customize your package to fit your needs.
      </p>
      <Separator className="my-5" />
      <div className="flex flex-col gap-5">
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Your Subscriptions</CardTitle>
            <CardDescription>
              Your package is currently on the{" "}
              <span className="font-medium bg-blue-200 text-blue-500 rounded-full px-3 border border-blue-500">
                free
              </span>{" "}
              plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Current Features</p>
            <div className="flex justify-between">
              <div className="grid gap-3 text-sm text-zinc-500 mt-5">
                <p>Active Period</p>
                <p>Price</p>
                <p>Custom Songs</p>
                <p>Max. Images</p>
                <p>Videos</p>
                <p>Guests</p>
                <p>Love Story</p>
                <p>Personalized Invitation</p>
                <p>Theme Collection</p>
                <p>Whatsapp Send</p>
              </div>
              <div className="grid gap-3 place-items-end text-sm text-zinc-900 mt-5">
                <p>{data.subscription.activePeriods} Months</p>
                <p>IDR {data.subscription.prices}</p>
                <X className="w-4 h-4" />
                <p>{data.subscription.features.maxImages} Images</p>
                <X className="w-4 h-4" />
                <p>{data.subscription.features.totalGuests} guests</p>
                <X className="w-4 h-4" />
                <X className="w-4 h-4" />
                <p>4 Themes</p>
                <X className="w-4 h-4" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-fit">Change Plan</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
