const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base.js');

const config = {
  // Set build for node instead of browser
  target: 'node',
  // App root file 
  entry: './src/index.js',
  // Output file location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  
  externals: [webpackNodeExternals()]
  
};

module.exports = merge(baseConfig, config);
