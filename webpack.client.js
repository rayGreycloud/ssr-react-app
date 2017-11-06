const path = require('path');

module.exports = {
  // Entry for client bundle 
  entry: './src/client/client.js',
  // Output file location
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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