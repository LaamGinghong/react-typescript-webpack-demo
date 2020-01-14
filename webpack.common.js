const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
    entry: "./src/index.jsx",
    context: path.resolve(__dirname),
    devtool: 'source-map',
    output: {
        filename: "[name]-[hash].bundle.js",
        path: path.resolve(__dirname) + "/dist"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|jsx?)$/, use: [
                    "thread-loader",
                    {
                        loader: "ts-loader", options: {
                            transpileOnly: true,
                            happyPackMode: true
                        }
                    }
                ],
            },
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {test: /\.css$/, use: ['style-loader', "thread-loader", 'css-loader']},
            {test: /\.scss$/, use: ['style-loader', "thread-loader", 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
}
