const path = require('path');


module.exports = function () {
    return {
        entry: './main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        }
    }
}