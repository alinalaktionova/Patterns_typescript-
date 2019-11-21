const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    mode: "development",
    entry: './adapter/src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "adapter/dist")
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
