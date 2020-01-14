const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const config = require('./webpack.common')

module.exports = {
    ...config,
    mode: "production",
    output: {
        filename: "[name]-[hash].bundle.js",
        path: path.resolve(__dirname) + "/dist"
    },
    plugins: [new HTMLWebpackPlugin({
        title: "React Typescript Webpack App",
        template: "./index.html"
    }), new CleanWebpackPlugin()]
}
