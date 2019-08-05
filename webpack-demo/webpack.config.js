const path = require('path')
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const purifyCssPlugin = require('purifycss-webpack');
const glob = require('glob');
const webpack = require('webpack');
const copyWebpackPlugin= require("copy-webpack-plugin");
var website ={
  publicPath:"http://127.0.0.1:8080/dist"
}

module.exports = {
  entry:{
    entry:"./src/entry.js",
    jquery:'jquery'
  },
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].js",
    // publicPath:'./'
    publicPath:website.publicPath
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader:"css-loader",
            options: { importLoaders: 1 }
          },{
            loader:'postcss-loader'
          }]
        })
      },
      {
        test:/\.(png|jpg|gif|jpeg)/,
        use:[{
            loader:'url-loader',
            options:{
                limit:500000,
                outputPath:"images/"
            }
        }]
      },
      {
        test:/\.(htm|html)$/i,
        use:['html-withimg-loader']
      },
      {
        test: /\.less$/,
        use: extractTextPlugin.extract({
          use:[{
              loader: "css-loader" // translates CSS into CommonJS
          },{
              loader: "less-loader" // compiles Less to CSS
          }],
          fallback:'style-loader',
        }),
      },
      {
        test:/\.scss$/,
        use:extractTextPlugin.extract({
          use:[
            {
              loader:'css-loader'
            },
            {
              loader:'sass-loader'
            }
          ],
          fallback:'style-loader'
        })
      },
      {
        test:/\.js$/,
        use:{
            loader:'babel-loader'
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new uglify(),
    new htmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    }),
    new extractTextPlugin("/css/index.css"),
    new purifyCssPlugin({
      paths:glob.sync(path.join(__dirname,('src/*.html')))
    }),
    new webpack.ProvidePlugin({
      $:'jquery'
    }),
    new copyWebpackPlugin([{
      from:__dirname+'/src/public',
      to:'./public'
    }])
  ],

  mode:"development",
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:"127.0.0.1",
    compress:true,
    port:8080
  },
  // ,
  // watch: true,
  // watchOptions:{
  //   //检测修改的时间，以毫秒为单位
  //   poll:1000, 
  //   //防止重复保存而发生重复编译错误。这里设置的500是半秒内重复保存，不进行打包操作
  //   aggregateTimeout:500, 
  //   //不监听的目录
  //   ignored:/node_modules/, 
  // }
}