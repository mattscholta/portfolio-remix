import { hydrate } from "react-dom";
import { RemixBrowser } from "@remix-run/react";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/worker.js");
  });
}

hydrate(<RemixBrowser />, document);
