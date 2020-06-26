const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '33',//html的抬头
            template: 'src/assets/index.html'
        }),
    ],
};

