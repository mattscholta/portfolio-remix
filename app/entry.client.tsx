import { hydrateRoot } from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/worker.js");
  });
}

hydrateRoot(document, <RemixBrowser />);
