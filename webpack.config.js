const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js"
    },
    plugins: [new CleanWebpackPlugin()],
    mode: 'development',
    resolve: {
      extensions: ['.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(mjs|js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [ '@babel/plugin-proposal-class-properties']
          },  
        }
      ],
    },
};