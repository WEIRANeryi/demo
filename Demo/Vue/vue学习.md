##Vue.js
1. 指令
2. 生命周期函数
3. 组件
4. 路由

###1.指令

v-bind：绑定属性 缩写为 :

v-on: 绑定事件 缩写为@

v-for v-show v-else
    v-else必须跟在另两个之后，否则不能被识别
    v-if和v-show的区别就是v-show的元素会始终存在与DOM中，只是切换了元素的display属性，使得元素显示与隐藏.


###2.生命周期函数

创建一个vue实例对象     data：undefined methods：undefined $el:undefined
👇 
👇
👇 
beforeCreate()          data：undefined methods：undefined $el:undefined

👇

created()               data:xxx methods:xxx $el:undefined
👇 
👇
👇 
判断是否存在实例对象中是否存在el选项，如果没有则直接停止编译，停止这个生命周期，如果有，则继续进行这个生命周期。
👇 
👇
👇 
判断是否有template属性，如果有，则将其作为编译的模板编译，如果没有就将外层元素作为模板进行编译，所以template的优先级是高于外层HTML元素的。
👇 
👇   
👇 
beforeMount             data:xxx methods:xxx $el:虚拟
给这个vue实例对象增加上$el参数，并且用上步得到的模板替换掉挂载的DOM元素。

👇 

mounted                 data:xxx methods:xxx $el:真实
正式以vue中存放的数据替换掉view视图层的数据
👇 
👇

beforeUpdate和updated
当vue中data数据发生改变或者切换了路由的时候，会发生页面的重新渲染，这时候按照顺序调用beforeUpdate和updated两个生命周期函数。
👇 
👇 

beforeDestroy           data:xxx methods:xxx $el:真实
beforeDestroy生命周期函数的调用发生在vue实例对象被销毁之前，调用后，Vue 实例上的东西还都是存在的，还都可以调用。

👇 

destroyed
destroyed生命周期函数在Vue实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

生命周期函数的实际使用方法：
beforecreate:    举个栗子：可以在这加个loading事件 

created：         在这结束loading，还做一些初始化，实现函数自执行  

mounted           在这发起后端请求，拿回数据，配合路由钩子做一些事情

beforeDestory：  你确认删除XX吗？ 

destoryed：       当前组件已被删除，清空相关内容
###3.组件
