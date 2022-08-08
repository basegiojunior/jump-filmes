module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          src: './src',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
  ],
};
