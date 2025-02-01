const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === 'production';

const d_root = (...args) => path.resolve(__dirname, ...args);
const d_src = (...args) => d_root('src', ...args);
const d_dist = (...args) => d_root('dist', ...args);
const d_components = (...args) => d_src('components', ...args);
const d_methodes = (...args) => d_src('methodes', ...args);

const config = {
  entry: d_src('index.tsx'),
  output: {
    path: d_dist(),
    filename: 'bundle.js',
    // publicPath: isProduction ? '/me/' : '/',
    publicPath: '/me/',
  },
  devServer: {
    //open: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: d_src('index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    //new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(mp4|eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      root: d_root(),
      src: d_src(),
      components: d_components(),
      methodes: d_methodes(),
      react: path.resolve('./node_modules/react'),
    }
  },
  mode: isProduction ? 'production' : 'development',
  optimization: {
    minimize: true,
    minimizer: [
      '...', new CssMinimizerPlugin(),
    ],
  },
};

module.exports = config;