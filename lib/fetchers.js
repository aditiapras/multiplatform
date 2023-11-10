import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const url = process.env.NEXT_PUBLIC_FETCH_URL;

export const serverFetch = async (path) => {
  const res = axios.get(`${url}${path}`).then((res) => {
    return res.data;
  });
  return res;
};

export const getSessions = async () => {
  const session = await getServerSession(authOptions);
  return session;
};
