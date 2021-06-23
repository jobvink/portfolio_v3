// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: ['./src/index.html', './src/scss/main.scss', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        contentBase: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from:'./src/img', to: './img'},
                {from: './src/fonts', to: './fonts'},
                {from: './src/projects', to: './projects'}
            ]
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.scss$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
