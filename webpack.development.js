const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    output: { publicPath: '/' },
    watch: true,
    entry: "./src/index.tsx",
    devtool: "source-map",
    devServer: {
        port: 8000,
        contentBase: './dist',
        liveReload: false,
        inline: true,
        historyApiFallback: true,
        hot: true
    }
})