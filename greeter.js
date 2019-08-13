// // 最基础的类Greeter，有三个成员变量
// class Greeter {
//   //属性 
//   greeting:string
//   //构造函数
//   constructor(message:string){
//     this.greeting = message
//   }
//   //一个方法 
//   greet(){
//     return 'hello' + this.greeting
//   }
// }
// let greeting =  new Greeter('world')
// greeting.greet()
//类的继承
// class Animal {
//   move(distance: number = 0) {
//     console.log(`Animal moved ${distance}`)
//   }
// }
// class Dog extends Animal{
//   bark(){
//     console.log('Woof! Woof!')
//   }
// }
// const dog = new Dog()
// dog.bark()
// dog.move(10)
// //父类，也称超类可被多个子类继承，并且可以通过super调用超类的方法
// // 按规定子类的构造器是一定要用super超类的属性的
// class Animal {
//   name: string
//   constructor(name:string){
//     this.name = name
//   }
//   move(distance: number = 0) {
//     console.log(`${this.name} moved ${distance}m`)
//   }
// }
// class Snake extends Animal {
//   constructor(name: string) {
//     super(name)
//   }
//   move(distance:number=5){
//     console.log(`Slithering...${this.name}`)
//     super.move(distance)
//   }
// }
// class Horse extends Animal{
//   constructor(name:string) {
//     super(name)
//   }
//   move(distance:number = 45){
//     console.log('Galloping...')
//     super.move(distance)
//   }
// }
// let sam = new Snake('sammy')
// let tom: Animal = new Horse('Tommy')
// sam.move()
// tom.move(34)
// //类的公共，私有与受保护的
// //如果不声明 ，一般属性，构造器，方法都是public
// class Animal {
//   private name: string
//   constructor(name:string){
//     this.name = name
//   }
//   move(distance:number = 0){
//     console.log(`${this.name} moved ${distance}`)
//   }
// }
// // new Animal('cat').name  //是访问不到的
// class Rhino extends Animal {
//   constructor(){
//     super('Rhino')
//   }
// }
// class Employee{
//   private name:string
//   constructor(name:string) {
//     this.name = name
//   }
// }
// let animal = new Animal('Goat')
// let rhino = new Rhino()
// let employee = new Employee('bob')
// animal = rhino
// animal = employee  //会报错，因为Employee的属性与Animal的来源是不一样的
// 受保护的只能在子类被访问
// class Person {
//   protected name:string
//   protected constructor(name:string) {
//     this.name = name
//   }
// }
// class Employee extends Person {
//   protected department: string
//   constructor(name:string, department:string){
//     super(name)
//     this.department = department
//   }
//   getElevatorPitch(){
//     return `Hello, my name is ${this.name}, and i work in ${this.department}`
//   }
// }
// let howard = new Employee('howard','sales')
// let john = new Person('john') //因为构造函数受保护的，只能在派生类去访问
// console.log(howard.getElevatorPitch())
// console.log(howard.name)  //报错
//readonly只读
// class Person {
//   readonly name:string
//   constructor(name:string) {
//     this.name = name
//   }
// }
// let john = new Person('john')
// john.name = 'sss' //报错，不能修改
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.name = name;
    }
    return Person;
}());
var john = new Person('john');
