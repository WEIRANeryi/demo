var arr = [1,2,5,3,4,1,2,3,3,5,4,8,5,1,5,8,1];
function fn1(arr) {
    let arr1 = [];
    for (let i = 0;i<arr.length;i++){
        if (arr1.indexOf(arr[i]) == -1){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
function fn2(arr) {
    let arr1 = [];
    for (let i = 0;i<arr.length;i++){
        if (!arr1.includes(arr[i])){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
function fn3(arr) {
    let obj = {};
    for (let i = 0;i<arr.length;i++){
        if (!obj[arr[i]]){
            obj[arr[i]] = arr[i];
        }
    }
    return obj;
}

//利用set
function fn4(arr){
    // let set1 = new Set(arr);
    // return [...set1];
    return [...new Set(arr)]
}
// console.log(fn4(arr));

//

function fn5(arr) {
    let arr1 = [];
    for (let i = 0;i<arr.length;i++){
        arr1[arr[i]] = 1;
    }
    console.log(arr1);
    for (let i = 0;i<arr1.length;i++){
        if (arr1[i] == 1){
            console.log(i);
        }
    }
}

fn5(arr);