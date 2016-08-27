var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'client.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/public'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: path.join(__dirname, 'public'),
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw', 'css'],
        include: path.join(__dirname, '/src'),
      },
    ]
  }
};
