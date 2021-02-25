module.exports = api => {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          targets: {
            node: true,
          },
          modules: 'commonjs',
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  };
};
