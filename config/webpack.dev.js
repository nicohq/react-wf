const baseConfig = require('./webpack.common');
const merge = require('webpack-merge');
const {resolve} = require('path');

module.exports = merge(baseConfig, {
    output: {
        filename: '[name].js'
    },
    devServer: {
        contentBase: resolve(__dirname, "../dist"),
        compress: true,
        historyApiFallback: true,
        port: 8000
    }
})
