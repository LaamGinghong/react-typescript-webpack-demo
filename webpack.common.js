const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = path

module.exports = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    context: resolve(__dirname),
    devtool: 'source-map',
    output: {
        filename: '[name].[hash].bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js'],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } },
            { test: /\.js$/, enforce: 'pre', loader: 'source-map-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({ title: 'React Demo', template: resolve(__dirname, 'index.html') }),
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
}
