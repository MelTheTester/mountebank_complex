const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.ENV || 'dev';
const PATHS = {
    src: path.join(__dirname, '../../src'),
    dist: path.join(__dirname, '../../dist')
};

const devProxies = {
  '/content/v2/**': {
    target: 'https://www-test.complexWeb.com',
    secure: false,
    changeOrigin: true
  },
  '/my-scheduler-bff/**': {
    target: 'http://localhost:10018',
    changeOrigin: true
  }
};

const stubProxies = {
  '/content/v2/**': {
    target: 'http://localhost:3002',
    secure: false,
    changeOrigin: true
  },
  '/my-scheduler-bff/**': {
    target: 'http://localhost:3001',
    changeOrigin: true
  }
};

module.exports = {
    devtool: 'source-map',
    context: PATHS.src,
    entry: [
        './main.scss',
        './index.js',
        'babel-polyfill'
    ],
    output: {
        publicPath: '/',
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'index.html'}),
        new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            },
            include: [
                PATHS.src,
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }]
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      proxy: (env === 'stubs') ? stubProxies : devProxies
    }
};
