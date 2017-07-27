const path = require('path');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
            'style-loader',
            'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
            'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
            'xml-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebPackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false,
      exclude: ['index.html']
    })
  ]
};
