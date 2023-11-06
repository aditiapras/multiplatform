"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function editDetails(body) {
  try {
    const postData = axios({
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${body.userId}&section=wedding`,
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
