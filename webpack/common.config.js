const path = require('path');

module.exports = {
  entry: {
    app: './src/bootstrap.js',
    vendor: './src/vendor.js',
  },

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
          publicPath: '/',
        },
      },

      {
        test: /\.(mp4|webm)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
      }
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
};

