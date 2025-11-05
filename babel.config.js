module.exports = {
  presets: [
    '@babel/preset-env',
    // It's also a good practice to set the new JSX runtime
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  env: {
    test: {
      plugins: ['@babel/plugin-transform-runtime'],
    },
  },
};
