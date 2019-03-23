const path = require("path");
//plugin插件都需要先引入后使用，loader则不需要引入。
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:{//项目主入口
        path: "./main.js"
    },
    output: {//输出的文件
        filename: "bundle1.js",//打包后输出文件的名字
        path: path.resolve(__dirname, "dist")//打包后输出文件所在位置
    },
    devServer: {
        contentBase: path.resolve(__dirname,"./dist")
    },
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|jpeg)$/,
                use: "url-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"] //注意解析css的时候要下载两个包，css-loader和style-loader，因为样式分为行内和外联样式。而且在使用的时候顺序不能反。
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"./index.html")
        }),
        new CleanWebpackPlugin()
    ]
}