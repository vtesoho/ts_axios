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


//类类型

//实例部分
// interface ClockInterface {
//   currentTime: Date
//   setTime(d:Date)
// }

// //静态部分 构造器接口
// interface ClockConstructor {
//   new(hour:number,minute:number)
// }

// //类里面必须要有接口里面定义的属性和方法
// class Clock implements ClockConstructor{
//   currentTime: Date

//   constructor(hour: number, minute: number){

//   }

//   setTime(d:Date){
//     this.currentTime = d
//   }
// }

// interface ClockInterface {
//   tick()
// }

// //静态部分 构造器接口
// interface ClockConstructor {
//   new(hour:number,minute:number): ClockInterface
// }

// function createClock(ctor:ClockConstructor,hour:number,minute:number): ClockInterface{
//   return new ctor(hour,minute)
// }

// class DigitalClock implements ClockInterface {
//   constructor(h:number,m:number){

//   }
//   tick(){
//     console.log('beep beep')
//   }
// }

// class AnalogClock implements ClockInterface{
//   constructor(h:number,m:number){

//   }
//   tick(){
//     console.log('tick toc')
//   }
// }

// let digital = createClock(DigitalClock,12,17)
// let analog = createClock(AnalogClock,12,17)


//接口继承
// interface Shape {
//   color: string
// }

// interface PenStroke {
//   penWidth: number
// }

// //一个接口可以继承多个接口
// interface Square extends Shape, PenStroke{
//   sildLength:number
// }

// let squre = {} as Square
// squre.color = 'bule'
// squre.sildLength = 10
// squre.penWidth = 5.0

//混合类型
// interface Counter {
//   (start: number): string,

//   interval: number
  
//   reset(): void
// }

// function getCounter(): Counter {
//   let counter = (function (star: number){

//   }) as Counter
  
//   counter.interval = 123

//   counter.reset = function (){
    
//   }

//   return counter
// }

// let c = getCounter()
// c(10)
// c.reset()
// c.interval = 5.0



//接口继承类

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select()
}

//接口继承类的时候，同时也会继承它的私有属性，只有是继承了父类，才会有私有成员属性，才能实现接口
class Button extends Control implements SelectableControl {
  select(){

  }
}

class TextBox extends Control {
  select(){

  }
}

//
class ImageC implements SelectableControl{
  select()
}

















