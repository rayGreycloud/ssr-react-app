const path = require('path');

module.exports = {
  // Set build for node instead of browser
  target: 'node',
  // App root file 
  entry: './src/index.js',
  // Output file location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Babel 
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react', 
            'stage-0',
            [
              'env', 
              { targets: { 
                browers: ['last 2 versions'] 
              }}
            ]
          ]
        }
      }
    ]
  }
};