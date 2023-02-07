import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { artwork } from "~/config/artwork";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html; charset=UTF-8;");

  return new Response("<!DOCTYPE html>" + artwork + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
