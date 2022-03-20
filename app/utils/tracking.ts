/**
 * @external https://developers.google.com/analytics/devguides/collection/ga4/reference/events
 * @description tbd...
 */

export const trackSocial = (social: string) => {
  window.gtag("event", "view_social", {
    provider: social
  });
};
