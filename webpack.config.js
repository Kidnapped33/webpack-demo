var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: '33',//html的抬头
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/, //$的意思是以css结尾，\.的意思是转译
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
