import webpack from "webpack";

export function buildrResolves():webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}