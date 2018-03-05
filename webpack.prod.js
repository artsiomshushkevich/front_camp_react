const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            exclude: /(node_modules|bower_components)/
        })
    ]
}); 