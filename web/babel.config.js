module.exports = {
  presets: ['module:metro-react-root-presets'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
