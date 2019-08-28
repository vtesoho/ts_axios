//布尔
//只能是true或是false
let isBool: boolean = false;
isBool = true;
// isBool = 1;


//数字
var decLiteral: number = 20  //10进制
let hexLiteral: number = 0x14  //16进制
let bingryLiteral: number = 0b10100  //2进制
let octalLiteral: number = 0o24  //8进制


//字符串
let nameA: string = 'hello'
nameA = 'word'
let age: number = 30
let sentence = `hello ${age}.
多行也可以

year ${nameA} happy`


//数组
//定义了number类型是不能用其它类型的，下面二种定义方式是一样的
let list: number[] = [1,3,4,5,6]

let listA: Array<number> = [1,4,5]

// listA.push('2')


//元组
//一种已知类型的数组
let x: [string, number]
x = ['hello',20]
// x = [20,20]  //类型不对

// console.log(x[0].substr)
// console.log(x[1].substr)  //index 1  是数字，没有substr

