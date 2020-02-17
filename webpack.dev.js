const config = require('./webpack.common')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackCdnPlugin = require('webpack-cdn-plugin')

const { HotModuleReplacementPlugin } = webpack
const { resolve } = path

const option = {
    mode: 'development',
    plugins: [
        new HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({ eslint: true }),
        new WebpackCdnPlugin({
            modules: [
                { name: 'react', var: 'React', path: 'umd/react.development.js' },
                { name: 'react-dom', var: 'ReactDOM', path: 'umd/react-dom.development.js' },
            ],
            publicPath: 'node_modules',
            crossOrigin: 'anonymous',
        }),
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        hot: true,
        open: 'Google Chrome',
        host: 'localhost',
        port: 8080,
        historyApiFallback: {
            disableDotRule: true,
        },
        overlay: true,
        inline: true,
        stats: 'errors-only',
    },
}

module.exports = merge(config, option)
