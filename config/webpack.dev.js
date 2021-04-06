const path = require('path');

module.exports = {
    entry: [
      '@babel/polyfill',
      './src/index.js'
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /(\.(css|scss)$)/,  
          use: [
            'style-loader', 
            'css-loader', 
            'sass-loader'
          ]
        },
        {
          test: /\.mdx?$/,
          use: ['babel-loader', '@mdx-js/loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                outputPath: 'images',
              }
            },
          ],
        },
        {
          test: /\.(woff2|woff|ttf|svg|eot)$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname,'../public'),
      publicPath: '/',
      filename: 'bundle.js',
    },
    devServer: {
      contentBase: path.join(__dirname,'../public'),
      compress: true,
      port: 9000,
    }
  };