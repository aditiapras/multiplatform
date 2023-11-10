import Links from "./components/links";
import Account from "./components/account";
import Profiles from "./components/profiles";
import Subscriptions from "./components/subscriptions";
import { getSessions, serverFetch } from "@/lib/fetchers";

export default async function Page({ searchParams }) {
  const { tab } = searchParams;
  const session = await getSessions();
  const data = await serverFetch(`/users?id=${session?.user?.id}`);

  return (
    <main className="w-full flex flex-col px-7 pt-5 pb-20 bg-zinc-50">
      <div className="flex flex-col gap-5 w-3/4 mx-auto mt-5">
        <p className="font-semibold text-xl">Settings</p>
        <p className="text-zinc-500 text-sm -mt-4">
          Settings and options for your account.
        </p>
        <div className="grid grid-cols-6 mt-5">
          <Links params={tab} />
          {tab == "subscriptions" ? (
            <Subscriptions data={data} />
          ) : tab == "profile" ? (
            <Profiles data={data} />
          ) : (
            <Account data={data} />
          )}
        </div>
      </div>
    </main>
  );
}
