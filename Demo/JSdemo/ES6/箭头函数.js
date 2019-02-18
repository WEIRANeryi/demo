/*
* 箭头函数有三个优点：
* 1.简明的语法
* 2.可以隐式返回
* 3.绑定的this值
* */

/*
简明的语法
 var arr = [2,4,6,8,10];

 //普通函数
 arr.forEach(function(val) {
    console.log(val)
})

 //箭头函数

 arr.forEach((val) => {
    console.log(val)
})
使用箭头函数，可以删除掉function关键字，然后在参数后边加上箭头，而且如果只有一个参数的话，括号也可以省略掉。
 */

/*
* 隐式返回
* //普通函数返回
* var arr = [2,4,6,8,10];
* var doubleArr = arr.map(val => {
*     return val*2;
* })
* //箭头函数返回
* var doubleArr = arr.map(val => val*2);
*
* 如果你的函数里边只有一个返回语句的话，我们甚至可以省略掉大括号以及return等，直接将返回值放在箭头后边即可
* */

/*
* 绑定的this值
* 普通函数
*var boyi = {
    name: "tom",
    foods: ["达利园蛋黄派", "巧克力派", "烧鸡"],
    printFood: function() {
        this.foods.forEach( function(food)  {
            console.log(`${this.name} 爱吃 ${food}`);
            // console.log(this.name + " 爱吃 " + food);
        })
    }
};
boyi.printFood();
//undefined 爱吃 达利园蛋黄派
//undefined 爱吃 巧克力派
//undefined 爱吃 烧鸡

箭头函数
const boyi = {
    name: "tom",
    foods: ["达利园蛋黄派", "巧克力派", "烧鸡"],
    printFood: function() {
        this.foods.forEach( food =>{
            console.log(`${this.name} 爱吃 ${food}`);
        })
    }
}
boyi.printFood();
//tom 爱吃 达利园蛋黄派
//tom 爱吃 巧克力派
//tom 爱吃 烧鸡
*普通函数里边的this.name之所以是undefined，未被打印出来的原因是，这个输出是在一个匿名函数中的，而匿名函数的调用者又属于window，
* 所以this值默认的指向window，在window下没有找到name属性，所以返回undefined。
* 而箭头函数的this在声明时就已经确定是只想父作用域。
* */
