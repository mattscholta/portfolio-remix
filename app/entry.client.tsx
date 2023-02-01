import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <RemixBrowser />
      </StrictMode>
    );
  });
}

// Kick off the hydration
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/worker.js");
  });

  /**
   * Prevents the default mini-infobar or install dialog from appearing on
   * mobile, storing the original event so we can use it later in the users
   * journey.
   */
  // window.addEventListener('beforeinstallprompt', (e) => {
  //   e.preventDefault();
  //   global.deferredPrompt = e;
  // });
} else {
  console.warn("Service workers are not supported in this browser.");
}
