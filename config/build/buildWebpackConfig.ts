import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration  {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolves(options),
        output: {
            filename: "[name].[contenthash].js",
            path: options.paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: 'inline-source-map',
        devServer: buildDevServer(options),
    }
}
