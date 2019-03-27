1. npm install vue --save 下载vue
2. 在要导入vue的文件中 import Vue from "vue/dist/vue.esm.js" 导入vue.js文件
3. 书写vue语法，生成一个vue实例。
4. 由于vue组件也属于资源之一，所以也需要 npm install -D vue-loader vue-tempalte-compiler下载两个相对应的loader。
引入vue-loader
```angular2
rules: [
    {
        test: /\.vue$/,
        use: "vue-loader"
    },
]
```
引入VueLoaderPlugin
```angular2
const VueLoaderPlugin = require("vue-loader/lib/plugin");
plugins: [
    new VueLoaderPlugin()
]
```
5. 之后进行打包即可

