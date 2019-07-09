const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// require("@babel/polyfill")

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            'src': path.resolve(__dirname, './src'),
            'resource': path.resolve(__dirname, './resource')
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: path.join(__dirname),
                exclude: /(node_modules)|(dist)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '/static/img/[hash].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html.template'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './index.html.template'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    performance: {
        hints: false
    }
}