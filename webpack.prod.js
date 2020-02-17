const config = require('./webpack.common')
const merge = require('webpack-merge')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const WebpackCdnPlugin = require('webpack-cdn-plugin')

const option = {
    mode: 'production',
    plugins: [
        new ForkTsCheckerWebpackPlugin({ async: false, useTypescriptIncrementalApi: true, memoryLimit: 8096 }),
        new WebpackCdnPlugin({
            modules: [
                { name: 'react', var: 'React', path: 'umd/react.production.min.js' },
                { name: 'react-dom', var: 'ReactDOM', path: 'umd/react-dom.production.min.js' },
            ],
            publicPath: 'node_modules',
            crossOrigin: 'anonymous',
        }),
    ],
}

module.exports = merge(config, option)
