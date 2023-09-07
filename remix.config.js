/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: false,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true
  },
  // serverBuildDirectory: "build",
  // serverBuildPath: "./build/index.js",
  serverDependenciesToBundle: [
    "decode-uri-component",
    "filter-obj",
    "split-on-first"
  ],
  watchPaths: async () => {
    return ["./docs/*", "./public/styles/**/*", "./README.md"];
  }
};
