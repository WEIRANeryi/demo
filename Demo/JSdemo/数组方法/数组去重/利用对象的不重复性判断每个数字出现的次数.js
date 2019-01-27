var arr = [1,2,3,5,4,4,5,1,3,2,5,4];

var obj = {};

for (var i = 0;i<arr.length;i++){
    if (!obj[arr[i]]){
        obj[arr[i]] = 1;
    }else {
        obj[arr[i]] = obj[arr[i]] + 1;
    }
}
console.log(obj);
/*
* 这种方法利用了对象属性名的不重复性，可以用来进行数组的去重，也可以知晓数字出现情况，去重的话就没有else
* 直接return就可以了。
* */