import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";

import { artwork } from "~/config/artwork";

export default function handleRequest(
  request: Request,
  resStatus: number,
  resHeaders: Headers,
  remixContext: EntryContext
) {
  resHeaders.set("Content-Type", "text/html");

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  return new Response("<!DOCTYPE html>" + artwork + markup, {
    headers: resHeaders,
    status: resStatus,
  });
}
