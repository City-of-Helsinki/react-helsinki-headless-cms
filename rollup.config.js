/* eslint-disable import/no-extraneous-dependencies */
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import includePaths from "rollup-plugin-includepaths";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "cjs",
    },
    {
      file: "lib-esm/index.js",
      format: "es",
    },
  ],
  plugins: [
    includePaths({ paths: ["src"], extensions }),
    resolve(),
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
      use: ["sass"],
    }),
    typescript(),
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
  ],
};
