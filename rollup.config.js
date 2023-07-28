/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import includePaths from 'rollup-plugin-includepaths';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: {
      index: 'src/core/index.ts',
      apollo: 'src/apollo/index.ts',
      nextjs: 'src/nextjs/index.ts',
    },
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        entryFileNames: '[name].js',
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      // Include polyfills for consistent behavior between server and client
      nodePolyfills(),
      includePaths({ paths: ['src'], extensions }),
      resolve(),
      typescript(),
      commonjs(),
      json(),
      postcss({
        modules: true,
        minimize: {
          preset: [
            'default',
            {
              calc: false,
            },
          ],
        },
        use: [
          [
            'sass',
            {
              includePaths: [path.join(__dirname, 'src/common/styles')],
            },
          ],
        ],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        extensions,
      }),
      copy({
        targets: [
          // Copy package.json into dist so that we can release from the dist
          // folder and have a flatter import structure
          { src: 'package.json', dest: 'dist/' },
          // Include README in the package for documentation
          { src: 'README.md', dest: 'dist/' },
          { src: 'LICENSE', dest: 'dist/' },
        ],
      }),
    ],
    external: [
      'react',
      'react-dom',
      'hds-react',
      'html-react-parser',
      'isomorphic-dompurify',
      '@apollo/client',
      'date-fns',
    ],
  },
  {
    input: {
      index: 'src/core/index.ts',
      apollo: 'src/apollo/index.ts',
      nextjs: 'src/nextjs/index.ts',
    },
    output: [
      {
        dir: 'dist',
        format: 'es',
      },
    ],
    plugins: [dts.default()],
  },
];
