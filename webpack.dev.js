const config = require('./webpack.common')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
    ...config,
    mode: "development",
    plugins: [new webpack.HotModuleReplacementPlugin(), new FriendlyErrorsWebpackPlugin()],
    devServer: {
        contentBase: "./dist",
        hot: true,
        open: 'Google Chrome',
        host: "localhost",
        port: 8080,
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: true,
        inline: true,
        stats: "errors-only",
        /* proxy: {
             '/api/': {
                 changeOrigin: true,
                 target: 'http://localhost:3000',
                 pathRewrite: {
                     '^/api/': '/'
                 }
             }
         }*/
    }
}
