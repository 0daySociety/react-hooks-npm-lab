module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    devServer: {
        hot: true,
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            /* config.module.rule('babel') */
            {
                test: /\.(j|t)s(x?)$/,
                exclude: [/node_modules/],
                use: [
                    /* config.module.rule('babel').use('babel-loader') */
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            /* config.module.rule('css') */
            {
                test: /\.css$/,
                use: [
                    /* config.module.rule('css').use('vue-style-loader') */
                    {
                        loader: 'vue-style-loader',
                    },
                    /* config.module.rule('css').use('css-loader') */
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            /* config.module.rule('image') */
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    /* config.module.rule('image').use('url-loader') */
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[name]_[hash:8].[ext]',
                        },
                    },
                ],
            },
            /* config.module.rule('font') */
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    /* config.module.rule('font').use('url-loader') */
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'font/[name]_[hash:8].[ext]',
                        },
                    },
                ],
            },
            /* config.module.rule('vue') */
            {
                test: /\.vue$/,
                use: [
                    /* config.module.rule('vue').use('vue-loader') */
                    {
                        loader: 'vue-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        /* config.plugin('html-template') */
        new (require('html-webpack-plugin'))({
            template: 'src/index.html',
        }),
        /* config.plugin('clean-webpack-plugin') */
        new (require('clean-webpack-plugin').CleanWebpackPlugin)(),
        /* config.plugin('vue-loader-plugin') */
        new (require('vue-loader/lib/plugin'))(),
    ],
    entry: {
        index: ['./src/index.js'],
    },
};
