var path = require('path');
var webpack = require('webpack');
 
module.exports = {
    entry: './src/js/app.jsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: "/js/",
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
