import { createCookie } from "remix";
import { COOKIE_THEME } from "./config/constants";

/**
 * @external https://remix.run/docs/en/v1/api/remix#createcookie
 */

export const cookieTheme = createCookie(COOKIE_THEME);
