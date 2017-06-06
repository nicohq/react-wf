const baseConfig = require('./webpack.common');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            comments: false,
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
        })
    ]
})
