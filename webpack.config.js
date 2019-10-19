const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot/scripts')
    },
    resolve: {
        extensions: [".ts", ".vue"]
    },
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/i, use: [ {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  publicPath: '../wwwroot/styles',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },  'css-loader', 'sass-loader' ] },
            {
                test: /\.tsx?$/, use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        appendTsxSuffixTo: [/\.vue$/]
                    }
                }
            },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin(),
        new OptimizeCssAssetsPlugin(),
        new MiniCssExtractPlugin({
            filename: '../styles/[name].css',
            chunkFilename: '../styles/[id].css'
        })
    ]
};