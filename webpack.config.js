const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
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
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};