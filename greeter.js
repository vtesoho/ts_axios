// let s = 'foo'
// s = null
// let sn: string | null = 'bar'
// sn = null
// sn = undefined
// function f(x:number,y?:number){
//   return x+(y|| 0)
// }
// f(1,2)
// f(1)
// f(1,undefined)
// f(1,null)
// class C{
//   a:number
//   b?:number
// }
// let c = new C()
// c.a = 12
// c.a = undefined  //报错
// c.b = 13
// c.b = undefined//可选参数默认会添加一个undefined的联合类型
// c.b = null  //null是不能赋值给number或是undefined的
// function f(sn:string|null):string{
//   if(sn === null) {
//     return 'default'
//   }else {
//     return sn
//   }
// }
// function fa(sn:string|null):string{
//   return sn! || 'default'
// }
//可以用一个！号来断言他肯定不为null
function broken(name) {
    function postfix(epither) {
        return name.charAt(0) + '. the' + epither;
    }
    name = name || 'Bob';
    return postfix(name);
}
broken(null);
