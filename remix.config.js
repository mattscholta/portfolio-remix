/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true
  },
  // serverBuildDirectory: "build",
  serverBuildPath: "./build/index.js",
  serverDependenciesToBundle: [
    "decode-uri-component",
    "filter-obj",
    "split-on-first"
  ],
  watchPaths: async () => {
    return ["./docs/*", "./public/styles/**/*", "./README.md"];
  }
};
