/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @description If you want to use other PostCSS plugins, see the following:
 * @external https://github.com/madyankin/postcss-modules
 * @external https://tailwindcss.com/docs/using-with-preprocessors
 */
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-import"),
    require("postcss-preset-env"),
    require("tailwindcss"),
    require("cssnano")
  ]
};
