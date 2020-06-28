const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].[chunkhash].css',
            ignoreOrder: false,
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/, //$的意思是以css结尾，\.的意思是转译
                // 下面的use把 CSS 抽成文件
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
                //下面的use 使用 JS 生成 style
                // use: ['style-loader', 'css-loader']
            }
        ]
    }
};

