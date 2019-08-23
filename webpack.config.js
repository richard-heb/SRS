const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV || 'production';

const baseConfig = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  mode: 'development',
  output: {
    filename: 'srs.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

const developmentConfig = merge(baseConfig, {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader', 'react-hot-loader/webpack'],
        enforce: 'pre',
      },
    ],
  },
});

const productionConfig = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
    ],
  },
});

const config = env === 'development' ? developmentConfig : productionConfig;

module.exports = config;
