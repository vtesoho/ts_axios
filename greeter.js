// // 最基础的类Greeter，有三个成员变量
// class Greeter {
//   //属性 
//   greeting:string
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//第一种方式 
// 这二种方式都没什么问题，但推荐用第一种，这种更直观一点
// class Person {
//   readonly name:string
//   constructor(name:string) {
//     this.name = name
//   }
// }
// let john = new Person('john')
// //第二种方式
// class Person {
//   constructor(readonly name:string) {
//     this.name = name
//   }
// }
// let john = new Person('john')
// console.log(john.name)
// john.name = 'sss'  //报错
// //存取器
// let passcode = 'secret1 passcode'
// class Employee{
//   private _fullName:string
//   get fullName(): string{
//     return this._fullName
//   }
//   set fullName(newName:string){
//     if(passcode && passcode === 'secret passcode'){
//       this._fullName = newName
//     }else{
//       console.log('error:')
//     }
//   }
// }
// let employee = new Employee()
// employee.fullName = 'Bob smith'
// if(employee.fullName) {
//   console.log(employee.fullName)
// }
// //静态属性
// class Grid {
//   static origiin = {x:0,y:0}
//   scale:number
//   constructor(scale:number) {
//     this.scale = scale
//   }
//   claculateDistanceFromOrigin(point: {x:number;y:number}){
//     let xDist = point.x - Grid.origiin.x
//     let yDist = point.y - Grid.origiin.y
//     return Math.sqrt(xDist*xDist + yDist * yDist) * this.scale
//   }
// }
// let grid1 = new Grid(1.0)
// let grid2 = new Grid(5.0)
// console.log(grid1.claculateDistanceFromOrigin({x:3,y:4}))
// console.log(grid2.claculateDistanceFromOrigin({x:3,y:4}))
//抽象类
// 一般是作为派生类的基类
// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('roamin the earth...')
//   }
// }
//如果在abstract里面没有定义的方法，就算在派生类中有实现，也还是不能使用，这是在使用抽象类为类型的时候
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name' + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeting = function () {
        console.log('the Accounting Department meets each monday at 10am');
    };
    AccountingDepartment.prototype.genterateReports = function () {
        console.log('genterateReports reports');
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printName();
department.printMeting();
// department.genterateReports()
