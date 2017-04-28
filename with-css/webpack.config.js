const path = require('path');

module.exports = function () {
    return {
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
        module: {
            loaders: [{
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }]
        }
    }
}