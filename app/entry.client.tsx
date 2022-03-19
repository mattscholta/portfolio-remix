import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/worker.js");
  });
}

hydrate(<RemixBrowser />, document);
