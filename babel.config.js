module.exports = function (_api) {
  _api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          safe: true,
        },
      ],
    ],
  };
};
