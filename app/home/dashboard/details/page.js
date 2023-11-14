import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import moment from "moment-timezone";
import FormDetail from "@/components/page/details/form";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const { weddingDetail, userId } = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/users?id=${session?.user?.id}`
  ).then((res) => res.json());

  return (
    <main className={`w-1/2 flex flex-col px-7 py-10 bg-white mx-auto`}>
      <p className="font-semibold text-2xl">Wedding Details</p>
      <div className="flex flex-col gap-5 mt-10 w-full">
        <div className="w-full flex justify-between items-center">
          <p className="text-zinc-500 text-sm">
            Please fill your wedding detail.
          </p>
          <p className="text-zinc-500 text-xs">
            Last update on{" "}
            {moment(weddingDetail?.created_at).format("YYYY/MM/DD HH:mm")}
          </p>
        </div>
        <FormDetail weddingDetails={weddingDetail} userId={userId} />
      </div>
    </main>
  );
}
