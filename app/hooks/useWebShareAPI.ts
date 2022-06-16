import { SITE_DESCRIPTION, SITE_TITLE } from "~/config/constants";

export interface UseWebShareAPI {
  isAvailable: boolean;
  onShare: (url: string) => void;
}

/**
 * @name useWebShareAPI
 * @external https://web.dev/web-share/ Share API
 * @external https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share GA Event
 * @description Simple hook to take advantage of the Web Share API
 * where available.
 */
export const useWebShareAPI = (): UseWebShareAPI => {
  // Setup
  const isAvailable = typeof window !== "undefined" && !!navigator.share;

  const data: ShareData = {
    text: SITE_DESCRIPTION,
    title: `Join me on ${SITE_TITLE}`
  };

  // Handlers
  const onShare = (url: string) => {
    if (!isAvailable) return;

    navigator
      .share({ ...data, url })
      .then(() => {
        if (!window.gtag) return;
        window.gtag("event", "share", { method: "Web Share" });
      })
      .catch((error) => {
        console.error("Web Share error", error);
      });
  };

  return {
    isAvailable,
    onShare
  };
};
