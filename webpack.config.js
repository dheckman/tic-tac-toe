const path = require('path');

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loaders: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.js', '.jsx'],
  },
  mode: 'development',
};