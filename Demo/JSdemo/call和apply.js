//call和apply的区别 哪个性能更好一点
//call和apply都是function原型链上的方法，都是用来改变方法内部this指向的，不同的是call传参是一个一个传，而apply则是将参数作为一个数组传进方法.当参数个数在三个以上时，call的性能更好一点，其他时候两者性能几乎一样。

fn.call(obj,10,20,30)
fn.apply(obj,[10,20,30])

//ES5之前apply好用在可以直接将数组传入，而call不行，ES6之后，新增的展开运算符可以解决这个问题。
let arr = [10,20,30]
fn.apply(obj,arr)
fn.call(obj,...arr)

