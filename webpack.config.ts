import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPaths, EnvOptions} from "./config/build/types/config";

const paths:BuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "index.html"),
}

export default (env:EnvOptions) => {
    const mode = env.mode || "development";
    const isDev = mode === "development";
    const port = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    });

    return config
};