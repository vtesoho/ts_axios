## 第三章第三节var


```js
// var a = 10

// function f(){
//   var message = 'hello'
//   return message
// }

// //典型的闭包
// function f(){
//   var a = 10
//   return function g(){
//     var b = a+1
//     return b
//   }
// }

// var g = f()
// g()   // 11

// var声名会提前。
// function f(shouldInitialize){
//   if(shouldInitialize) {
//     var x = 10
//   }
//   return x
// }
// f(true)  //10
// f(false) //undefined


// function sumMatrix(matrix){
//   var sum = 0
//   for(var i = 0; i< matrix.length; i++){
//     console.log('one',i)
//     var currentRow = matrix[i]
//     for(var i = 0; i< currentRow.length; i++){
//       console.log('tow',i)
//       sum += currentRow[i]
//     }
//   }
//   return sum
// }

// var matrix = [
//   [1,2,3,],
//   [4,5,6]
// ]

// console.log(sumMatrix(matrix))  //此时输出等于6，因为var会覆盖


// 比较经典的js
for(var i = 0; i< 10; i++){
  setTimeout(function (){
    console.log(i)
  }, 100 * i)
}

for(var i = 0; i< 10; i++){
  (function(i){
    setTimeout(function (){
      console.log(i)
    }, 100 * i)
  })(i)
}
```