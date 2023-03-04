/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildDirectory: "build",
  serverDependenciesToBundle: [
    "decode-uri-component",
    "filter-obj",
    "split-on-first"
  ],
  watchPaths: async () => {
    return ["./docs/*", "./public/styles/**/*", "./README.md"];
  }
};
