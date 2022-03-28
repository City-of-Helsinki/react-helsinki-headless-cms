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
import copy from "rollup-plugin-copy";

export default buildConfig();

function buildConfig() {
  const extensions = [".js", ".jsx", ".ts", ".tsx"];

  return {
    input: {
      index: "src/index.ts",
      apollo: "src/apollo/index.ts",
      nextjs: "src/nextjs/index.ts",
    },
    output: [
      {
        dir: "dist",
        format: "cjs",
        entryFileNames: "cjs/[name].js",
      },
      {
        dir: "dist",
        format: "esm",
        entryFileNames: "[name].js",
      },
    ],
    plugins: [
      // Include polyfills for consistent behavior between server and client
      nodePolyfills(),
      includePaths({ paths: ["src"], extensions }),
      resolve(),
      ts(),
      commonjs(),
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
      copy({
        // Copy package.json into dist so that we can release from the dist
        // folder and have a flatter import structure
        targets: [{ src: "package.json", dest: "dist/" }],
      }),
    ],
    external: [
      "react",
      "react-dom",
      "hds-react",
      "html-react-parser",
      "isomorphic-dompurify",
      "@apollo/client",
    ],
  };
}
