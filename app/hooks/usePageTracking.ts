import * as React from "react";
import { useLocation } from "remix";

import { BASE_URL } from "~/config/settings.server";

/**
 * @name usePageTracking
 * @description tbd...
 */
export const usePageTracking = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_location: `${BASE_URL}${pathname}`
    });
  }, [pathname]);
};
