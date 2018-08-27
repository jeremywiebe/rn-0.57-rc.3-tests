module.exports = function(api) {
  api.cache(true);

  return {
    "plugins": ["@babel/plugin-transform-classes", "@babel/plugin-proposal-class-properties"],
    "presets": ["module:metro-react-native-babel-preset"]
  }
}
