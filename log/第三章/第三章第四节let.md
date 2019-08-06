## 第三章第四节let


```js
// //块作用域 
// try {
//   throw 'Oh no'
// } catch (e) {
//   console.log('catch it')
// }
// console.log(e)

// function f(input: boolean){
//   let a = 100
//   if(input) {
//     let b = a + 1
//     return b
//   }
//   return b
// }


// a++  
// let a =1
// a++


// // 有es2015之前，这样写是没问题的，在es2015之后就不行了
// function foo(){
//   return a
// }

// foo()

// let a


// // let 只能定义一次
// function f(x) {
//   var x
//   var x
//   if(true){
//     var x
//   }
// }

// let x=10
// function st(b){
//   // let x = 20
//   console.log(x,b)
// }
// st(30)


// function f(condition,x){
//   if(condition){
//     let x = 100
//     return x
//   }
//   return x
// }

// f(false,0)
// f(true,0)

// function sumMatrix(matrix: number[][]){
//   let sum = 0
//   for(let i = 0; i < matrix.length; i++){
//     let currentRow = matrix[i]
//     for(let j = 0; j < currentRow.length; j++){
//       sum += currentRow[j]
//     }
//   }
//   return sum
// }

// let matrix = [
//   [1,2,3],
//   [4,5,6]
// ]

// console.log(sumMatrix(matrix))


for(let i=0;i<10;i++){
  setTimeout(function(){
    console.log(i)
  },100*i)
}

```