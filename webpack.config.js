// import path from 'path'
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',
  entry: './src/server/app.ts',
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|ts)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              ['@babel/preset-typescript'],
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name].[hash][ext]',
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  externals: [new nodeExternals()],
  plugins: [new MiniCssExtractPlugin()],
}
