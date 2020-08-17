const path = require('path');

let buildTypescript = {
  entry: ['./src/main.ts'],
  module: {
    rules: [
      {
        test: /\.ts$/, 
        exclude: /node_modules/, 
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name]'.js,
    path: path.resolve(__dirname, 'dist'),
  }
};

module.exports = [buildTypescript];