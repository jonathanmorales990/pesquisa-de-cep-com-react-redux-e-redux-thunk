const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    //the entry point
    entry: './src/index.jsx',
    //some output config like chunknames
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        port: 8080,
        contentBase: './build',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            //alias to node module if u need
            modules: __dirname + '/node_modules',
            /*jquery: 'modules/path to your jquery'*/
        }
    },
    plugins: [ 
       //uncomment to inject jquery
      /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),*/
        //mini extract instead of npm package extract text, its work better it new versio of webpack
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },  {
            test: /\.(sa|sc|c)ss$/,
            loader: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',/*
              'postcss-loader',
              'sass-loader', install postcss or sass to use*/
            ],
        }, {
            //media like images and fonts path and loader
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file-loader',
            options: {
                outputPath: 'media/'
            }
        }]
    }
}