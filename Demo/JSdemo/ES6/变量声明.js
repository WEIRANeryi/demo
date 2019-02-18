/*
* 在es6中新加了let const变量声明，再加上之前的var声明变量
* var声明的变量具有四个特性：
* 1.允许重复声明。2.function scope作用域。3.声明后的变量允许重复修改数值。4.编译的时候会发生变量提升。
* let定义的变量具有block scope，而且在同一个作用域内不能重复声明,但是可以进行修改。
* const定义的则是常量。既像let那样具有block scope，也不能重复声明，还不能重复的进行赋值，因为定义的是一个常量。当然这些都是要在一个作用域内。
* let和const都不会发生变量的提升
*
*/

// function foo() {
//     for (var i =0;i<10;i++){
//         setTimeout(function () {
//             console.log(i);
//         },1000);
//         // console.log(i);
//     }
// }
// foo();

// function foo() {
//     const item = 10;
//     console.log(item);
//     if (true){
//         const item = 100;
//         console.log(item);
//     }
//     console.log(item);
// }
// foo();