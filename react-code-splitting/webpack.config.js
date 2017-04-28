const path = require('path');

module.exports = {
    entry: './index.js',
    devtool: 'eval',
    output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
    },
    module:{
	rules: [{
	    test: /.js$/,
	    loader: 'babel-loader',
	    options: {
		    presets: ['es2015', 'react']
		}
	}]
    }
}