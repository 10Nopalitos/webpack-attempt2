const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app: './src/index.js',

  },
  plugins : [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      title: 'Web w react, express webpack dev n prod',

    })
  ],
  output : {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module : {
    rules:[
      {
 test: /\.(js|jsx)$/,
 exclude: /node_modules/,
 use: {
   loader: 'babel-loader',
   options: {
     presets: ['@babel/react']
   }
 }
},
      {
        test:/\.(css|scss)$/,
        use:['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
}
    ]
  }
}
