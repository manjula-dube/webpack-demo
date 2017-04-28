var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const path = require('path');
module.exports = function(env) {
    return {
        entry: {
            main: './index.js',
            vendor: 'momentjs'
        },
        output: {
            filename: '[chunkhash].[name].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins:[
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'],
                filename: '[chunkhash].[name].js'
            }),
            new HTMLWebpackPlugin({
                filename: 'index.html'
            })
        ]
    }
}