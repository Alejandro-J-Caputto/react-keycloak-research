// import path from 'path'
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')

const commonWebpackConfig = require('./webpack.common')

const clientConfig = {
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
  externals: [new NodeExternals()],
  plugins: [new MiniCssExtractPlugin()],
}

module.exports = merge(commonWebpackConfig, clientConfig)
