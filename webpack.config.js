const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpackconfig file consists of:
      // * entry and output points
      // * module (for loaders)
      // * plugins

module.exports = {
    mode: 'development',
    entry : path.resolve(__dirname, 'src/index.js'),  // entry point of execution is index.js
    output : {
        path : path.resolve(__dirname, 'dist'),     // after execution of webpack build folder will be created with name dist
        filename : 'main.js'    // all content will go in single main.js file ( name of .js file ur choice )
    },
    module : {             // now comes loader ( it is use to process css files, loaders will load image in js,css file)
        rules : [
            {
                test : /\.css$/,     // the file with extension .css
                use : ['style-loader','css-loader']    // css loader will be applied on file with extension .css
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'
                    ],
                  }
                }
              }
        ]
    },
    plugins : [                // plugins are used for html files and other
        new HtmlWebpackPlugin({
            title : 'Webpack App', 
            filename : 'index.html',      // in build folder content to be rendered on screen will go in index.html (html file name is ur choice)
            template : 'src/template.html'     // take the html to be build from this path
        }),
    ]
}