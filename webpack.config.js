const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [new HtmlWebpackPlugin(
        {
            inject: true,
            template: path.resolve(__dirname, './public/index.html'),
        }
    )],
    mode: 'production',
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public')
        },
        compress: true,
        port: 3000,
        hot: true
    },
};
