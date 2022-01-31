/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
// import path from 'path'
const path = require('path')

const { merge } = require('webpack-merge')

const commonWebpackConfig = require('./webpack.common')

const serverConfig = {
  target: 'web',
  entry: './src/browser/browser.tsx',
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
}

module.exports = merge(commonWebpackConfig, serverConfig)
