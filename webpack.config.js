const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
    return webpackMerge({
        entry: './src/index.ts',
        mode,
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    enforce: 'pre',
                },
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: '[name].js',
            sourceMapFilename: '[file].map',
            path: path.resolve(__dirname, 'dist'),
            publicPath: 'http://localhost:3000',
            globalObject: 'this'
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        plugins: [
            new CleanWebpackPlugin(['dist']),
        ],
        node: {
            net: 'empty',
            fs: 'empty'
        }
    },
        modeConfig(mode)
    );
};