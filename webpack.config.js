const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot')
    },
    resolve: {
        extensions: [".ts", ".vue"]
    },
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/i, use: [ {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './',
                  hmr: process.env.NODE_ENV === 'development',
                },
              },  'css-loader', 'sass-loader' ] 
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff(2)?)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: require.resolve('file-loader'),
                    }
                }
            },
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
        new MiniCssExtractPlugin()
    ]
};