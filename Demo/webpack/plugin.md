plugin就是插件系统，里边有许多的插件来提供不同的功能，先下载之后再在webpack.config.js中引入，再在下边配置相关配置。

1. npm install html-webpack-plugin --save-dev

来自动生成一个html文件，不用每次都要引入
2. npm install clean-webpack-plugin --save-dev
来将每次生成的文件删除，只保存最后一个最新的。帮你清理

```angular2
plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,"./index.html")
    }),
    new CleanWebpackPlugin()
]
```