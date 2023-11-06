import React from "react";

export default async function Page({ params }) {
  const subdomain = params.domain.split(".")[0];
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_FETCH_URL}/domains?name=${subdomain}`
  ).then((res) => {
    return res.json();
  });

  return (
    <div>
      domain page:{params.domain}
      subdomain: {subdomain}
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
