import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(options: BuildOptions):webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: options.paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev),
        }),

    ]

    if(options.isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}