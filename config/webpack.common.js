const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../package.json');
const vendors = Object.keys(config.dependencies);
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const __DEV = process.env !== 'production';

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].[contenthash].css",
    allChunks: true,
    disable: !__DEV
});

const webpackConfig = {
    target: 'web',
    entry: {
        app: resolve(__dirname, '../src/app.js'),
        vendor: vendors
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: __DEV ? '[name].js' : '[name].[chunkhash].js'
    },
    module: {
        rules: []
    },
    plugins: []
}

webpackConfig.module.rules.push({
    test: /\.scss$/,
    loader: extractSass.extract({
        use: [{
            loader: "css-loader",
            options: {
                sourceMap: __DEV,
                minimize: {
                    autoprefixer: {
                        add: true,
                        remove: true,
                        browsers: ['last 2 versions'],
                    },
                    discardComments: {
                        removeAll: true,
                    },
                    discardUnused: false,
                    mergeIdents: false,
                    reduceIdents: false,
                    safe: true,
                    sourcemap: __DEV,
                },
            },
        }, {
            loader: "sass-loader",
            options: {
                includePaths: [
                    resolve(__dirname, '../src/styles'),
                ]
            }
        }],
        // use style-loader in development
        fallback: "style-loader"
    })
});

webpackConfig.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
        loader: 'babel-loader',
        query: {
            cacheDirectory: true,
            plugins: [
                'babel-plugin-transform-class-properties',
                'babel-plugin-syntax-dynamic-import', [
                    'babel-plugin-transform-runtime',
                    {
                        helpers: true,
                        polyfill: false,
                        regenerator: true,
                    },
                ],
                [
                    'babel-plugin-transform-object-rest-spread',
                    { useBuiltIns: true },
                ],
            ],
            presets: [
                'babel-preset-react', ['babel-preset-env', {
                    targets: {
                        uglify: true,
                        modules: false,
                    },
                }],
            ]
        },
    }],
})

webpackConfig.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader',
    options: {
        limit: 8192,
    },
})


webpackConfig.plugins.push(
    extractSass,
    new HtmlWebpackPlugin({
        template: resolve(__dirname, '../src/index.html'),
        inject: true,
        minify: {
            collapseWhitespace: true,
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
);

module.exports = webpackConfig;
