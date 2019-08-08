// interface LabeledValut {
//   label: string
// }

// function printLabel(labelLedOjb: LabeledValut){
//   console.log(labelLedOjb.label)
// }

// let myOjb = {size:10,label:'size 10 Object'}

// // // 必须要有label属性，并且类型还要一致
// // let myOjb = {size:10,label:1}
// // let myOjb = {size:10}

// printLabel(myOjb)



// //可选属性
// interface Square {
//   color: string
//   area: number
// }

// // ?表示可选属性
// interface SquareConfig {
//   color?: string
//   width?: number
// }

// function createSquare(config: SquareConfig) : Square{
//   let newSquare = {color: 'white', area: 100}
//   if(config.color){
//     newSquare.color = config.color
//   }
//   if(config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let mySquare = createSquare({color:'block'})



//只读属性
// interface Point {
//   readonly x:number
//   readonly y:number
// }

// let p1:Point = {x:10,y:20}
// p1.x = 4  //会报错

// let a: number[] = [1,2,3,4]
// let ro:ReadonlyArray<number> = a
// ro[0] = 12  //会报错




// // 额外属性
// interface Square {
//   color: string
//   area: number
  
// }

// // ?表示可选属性
// interface SquareConfig {
//   color?: string
//   width?: number
//   [propName:string]:any   //表示可有其它任何类型的属性
// }

// function createSquare(config: SquareConfig) : Square{
//   let newSquare = {color: 'white', area: 100}
//   if(config.color){
//     newSquare.color = config.color
//   }
//   if(config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }

// let mySquare = createSquare({colosr:'block'})




// //接口描述函数类型
// interface SearchFunc {
//   (source: string, subString: string): boolean
// }

// let mySearch: SearchFunc

// mySearch = function(source:string,subString:string):boolean{
//   let result = source.search(subString)
//   return result > -1
// }

// //也可以使用简写
// mySearch = function(src:string,sub:string):boolean{
//   let result = src.search(sub)
//   return result > -1
// }

// //也可以不写，让ts自动判断，但参数数量与返回值的类型要匹配上
// mySearch = function(src,sub){
//   let result = src.search(sub)
//   return result > -1
// }


// 可索引类型
// interface StringArray {
//   [index: number]: string
// }

// let myArray: StringArray
// myArray = ['Bob', 'Fred']
// let myStr:string = myArray[0]

// class Animal{
//   name:string
// }

// class Dog extends Animal{
//   breed: string
// }

// //数字索引必须是string索引的子类型，不然会报错
// interface NotOkay{
//   [x:number]: Dog
//   [x:string]: Animal
// }

// interface NumberDictionary {
//   [index: string]: number

//   length: number
//   name:string //会报错，因为定义了所有索引都返回一个number类型
// }


//设置只读可索引接口
// interface ReadonlyStringArray {
//   readonly [index:number]: string
// }

// let myArray:ReadonlyStringArray = ['a','b']
// myArray[1] = 'c'    //会报错








