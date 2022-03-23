/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import path from "path";

import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import includePaths from "rollup-plugin-includepaths";
import postcss from "rollup-plugin-postcss";
import ts from "rollup-plugin-ts";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default [
  buildConfig("index"),
  buildConfig("apollo/index"),
  buildConfig("nextjs/index"),
];

function buildConfig(subModule) {
  const extensions = [".js", ".jsx", ".ts", ".tsx"];

  return {
    input: `src/${subModule}.ts`,
    output: [
      {
        file: `lib/${subModule}.js`,
        format: "cjs",
      },
      {
        file: `lib-esm/${subModule}.js`,
        format: "esm",
      },
    ],
    plugins: [
      // Include polyfills for consistent behavior between server and client
      nodePolyfills(),
      includePaths({ paths: ["src"], extensions }),
      resolve(),
      ts(),
      commonjs({
        include: "../../node_modules/**",
      }),
      json(),
      postcss({
        modules: true,
        minimize: {
          preset: [
            "default",
            {
              calc: false,
            },
          ],
        },
        use: [
          [
            "sass",
            {
              includePaths: [path.join(__dirname, "src/common/styles")],
            },
          ],
        ],
      }),
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        extensions,
      }),
    ],
    external: [
      "react",
      "react-dom",
      "react-spring/renderprops.cjs",
      "react/jsx-runtime",
      "lodash.uniqueid",
      "lodash.isequal",
      "lodash.isfunction",
      "debounce",
      "react-fast-compare",
      "react-popper",
      "react-use-measure",
      "classnames",
      "html-react-parser",
      "isomorphic-dompurify",
    ],
  };
}
