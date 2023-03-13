/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {},
  serverBuildPath: "./build/index.js",
  serverDependenciesToBundle: [
    "decode-uri-component",
    "filter-obj",
    "split-on-first",
  ],
  serverModuleFormat: "cjs",
  tailwind: true,
  watchPaths: async () => {
    return ["./docs/*", "./public/styles/**/*", "./README.md"];
  },
};
