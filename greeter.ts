// //枚举
// enum Color{
//   Red = 1,
//   Green = 3,
//   Blue = 4,
// }

// //经过编译后的枚举
// // var Color;
// // (function (Color) {
// //     Color[Color["Red"] = 1] = "Red";
// //     Color[Color["Green"] = 3] = "Green";
// //     Color[Color["Blue"] = 4] = "Blue";
// // })(Color || (Color = {}));



// let c: Color = Color.Blue
// let colorName:String = Color[2]


// console.log(colorName)


// //any
// let notSure:any = 4
// notSure = "is String"
// notSure = false

// let list:any[] = [1,true,'free']
// list[1] = 100


// //void
// function warnUser(): void{
//   console.log('This is void')
// }


// //undefined null
// // let u: undefined = undefined
// // let n: null = null

// //如果加上--strictNullChecks编译，这样就会报错
// let num: number = 3
// num = null


//never
// 任何类型的子类型
//应用于报错和无限循环
// function error(message: string): never{
//   throw new Error(message)
// }

// function fail (){
//   return error('something failed')
// }


// function inifiniteLoop(): never{
//   while (true) {

//   }
// }


//object
// declare function create(o: object | null):void;

// create({prop: 0})
// create(null)

// create(42)
// create('string')
// create(false)
// create(undefined)




//类型断言
let someValue: any = 'this is a string'

// let strLength: number = (<string>someValue).length
let strLength: number = (someValue as string).length


