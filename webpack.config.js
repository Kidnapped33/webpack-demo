const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    mode: 'development',
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/, //$的意思是以css结尾，\.的意思是转译
                // 下面的use 使用 JS 生成 style
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

