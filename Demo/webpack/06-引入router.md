1. npm install vue-router --save 下载vue-router
2. 项目根目录下新建一个src文件夹，再在src下新建router文件夹，在这个文件夹内新建一个index.js当作主路由文件，然后


```angular2
import Vue from 'vue/dist/vue.esm.js'
import Router from "vue-router"
import index from "../views/index.vue"

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/",
            component: index
        },
        {
            path: "/second",
            component: () => import('../views/second.vue')//异步组件，可以不用在首页将所有的组件都下载完毕，而是在需要用到的时候异步的将组件下载然后渲染到页面上。
        }
    ]
})

export default router
```