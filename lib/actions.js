"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { getSessions } from "./fetchers";
import moment from "moment-timezone";
import { z } from "zod";

const weddingDetailsSchema = z.object({
  bridesName: z.string().max(50),
  brides_fathers_name: z.string().max(50),
  brides_mothers_name: z.string().max(50),
  groomsName: z.string().max(50),
  grooms_fathers_name: z.string().max(50),
  grooms_mothers_name: z.string().max(50),
  wedding_date: z.string().datetime(),
  wedding_time: z.string().max(50),
  akad_date: z.string().datetime(),
  akad_time: z.string().max(50),
  wedding_location: z.string().max(50),
});

export async function editWeddingDetails(formData) {
  const id = (await getSessions()).user?.id;
  const body = weddingDetailsSchema.parse({
    bridesName: formData.get("bridesName"),
    brides_fathers_name: formData.get("brides_fathers_name"),
    brides_mothers_name: formData.get("brides_mothers_name"),
    groomsName: formData.get("groomsName"),
    grooms_fathers_name: formData.get("grooms_fathers_name"),
    grooms_mothers_name: formData.get("grooms_mothers_name"),
    wedding_date: moment(formData.get("wedding_date")).toISOString(),
    wedding_time: formData.get("wedding_time"),
    akad_date: moment(formData.get("akad_date")).toISOString(),
    akad_time: formData.get("akad_time"),
    wedding_location: formData.get("wedding_location"),
  });

  try {
    const postData = axios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${id}&section=wedding`,
      data: body,
    }).then((res) => {
      return res.data;
    });
    console.log(await postData);
    revalidatePath("/home/dashboard/details");
  } catch (error) {
    console.log(error);
  }
}
