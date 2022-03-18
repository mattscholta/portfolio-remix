/**
 * @name parseCookieHeader
 * @external https://www.30secondsofcode.org/js/s/parse-cookie
 */
export const parseCookieHeader = (str: string) => {
  return str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      const [key = "", value = ""] = v;

      acc[decodeURIComponent(key.trim())] = decodeURIComponent(value.trim());

      return acc;
    }, {} as any);
};
