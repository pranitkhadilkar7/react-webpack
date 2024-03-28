const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[contenthash].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }],
                            '@babel/preset-react',
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
          chunks: "all",
        },
    },
}