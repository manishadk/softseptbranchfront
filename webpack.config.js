const webpack = require('webpack');
const path = require('path');

// test 
module.exports = {

	// devTools:'source-map-inline'
    entry: {
        'index': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },

    module: {
        rules: [
            {
//  webpack regex // hash chunk hash
            // rules kun kun files ma use garne regex regExp
                test: /\.js$/, 
                exclude: /node_modules/,
                use:'babel-loader'
            }

        ]
    }



}