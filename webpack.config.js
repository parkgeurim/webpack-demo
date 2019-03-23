const path = require('path');
const htmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 시작점
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
    // __ (현재 디렉토리를 기준으로 컴파일)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ]
      },
      {
        test: /\.scss$/,
        use: [ "style-loader", "css-loader", "sass-loader" ]
      }
    ]
  },
  plugins: [
    new htmlwebpackPlugin()
  ]
};

