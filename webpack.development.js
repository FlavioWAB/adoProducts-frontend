const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    mode: 'development',
    watch: true,
    entry: "./src/index.tsx",
    devtool: "source-map",
    devServer: {
        port: 8000,
        contentBase: './dist',
        liveReload: false,
        inline: true,
        hot: true
    }
})