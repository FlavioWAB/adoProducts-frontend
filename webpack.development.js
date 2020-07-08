const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'development',
    output: { publicPath: '/' },
    watch: true,
    entry: "./src/index.tsx",
    devtool: "source-map",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        port: 8000,
        contentBase: './dist',
        liveReload: false,
        inline: true,
        historyApiFallback: true,
        hot: true
    }
})