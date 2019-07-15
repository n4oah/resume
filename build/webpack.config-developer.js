const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')

module.exports = {
    entry: ['@babel/polyfill', path.resolve(rootPath, './src/main.js')],
    output: {
        path: path.resolve(rootPath, 'dist'),
        publicPath: '/'
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            'src': path.resolve(rootPath, './src'),
            'resource': path.resolve(rootPath, './resource')
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
                include: path.join(rootPath),
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
                        loader: 'file-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    devServer: {
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join('/', 'index.html')
                },
            ],
          },
        historyApiFallback: true,
        compress: true,
    },
    performance: {
        hints: false
    }
}