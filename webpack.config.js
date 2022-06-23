// ENTRY AND OUTPUT: TELL SERVER WHAT TO COMPILE AND FROM WHERE & WHERE TO SEND COMPILED VERSION
// MODE: MODE OF OUTPUT - IN SCRIPTS SPECIFY NODE_ENV VARIABLE NODE_ENV=production webpack
//RESOLVE: IMPORT ANYTHING FROM /SRC IN RELATIVE PATHS. 
//DEVSERVER: WEBPACK-DEV-SERVER SCRIPT WHAT FILES NEED TO BE OUTPUT TO BROWSER ..EVERYTHING FROM /SRC
// PLUGINS: PLUGINS NEEDED IN APP
// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {  
    entry: {
      index:path.join(__dirname,'src','index.js')
    },  
    output: {    
        path: path.join(__dirname,'build'),    
        publicPath: '/build',  //dist/
        filename: "bundle.js",
        chunkFilename: '[name].js'  
    },  
    
    mode: process.env.NODE_ENV || 'development',  
    resolve: {    
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],  
        extensions: ['.json', '.js', '.jsx']
    },  
    devServer: {    
        contentBase: path.join(__dirname,'build'),
        inline: true,
      host: 'localhost',
      port: 8080,  
    },  
    devtool: 'source-map',
    module: {    
        rules: [      
            {        
              test: /\.(js|jsx)$/,
              include: [
                path.resolve(__dirname, 'src')
              ],
              exclude: [
                path.resolve(__dirname, 'node_modules')
              ],
              use: ["babel-loader"]   
            },      
            {
              test: /\.(css|scss)$/,
              use: [
                "style-loader",
                // creates style nodes from JS strings
                "css-loader"
                // translates CSS into CommonJS
                // "sass-loader"
                // compiles Sass to CSS, using Node Sass by default
              ],
            },  
            {        
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,        
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images',
                  type: 'asset/resource',
                },
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
           {
             test: /\.(csv|tsv)$/i,
             use: ['csv-loader'],
           },
           {
             test: /\.xml$/i,
            use: ['xml-loader'],
          },
        ]  
    },  
    plugins: [    
        new HtmlWebpackPlugin({      
          template: path.resolve(__dirname, 'public', 'index.html'),
          favicon: "public/favicon.ico"
        }) 
    ]};