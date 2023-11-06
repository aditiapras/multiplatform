import React from "react";

export default async function Page({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/domains?name=wedding.localhost:3000`
  ).then((res) => {
    return res.json();
  });
  // console.log(params.domain);

  return (
    <div>
      domain page:{params.domain}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
