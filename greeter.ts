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


// //可以用一个！号来断言他肯定不为null
// function broken(name:string | null) : string{
//   function postfix(epither: string) {
//     return name!.charAt(0) + '. the' + epither
//   }
//   name = name || 'Bob'
//   return postfix(name)

// }

// broken(null)



//字符串字变量类型



type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement{
  animate(dx:number, dy:number, easing: Easing) {
    if(easing === 'ease-in'){

    }else if(easing === 'ease-out') {
      
    }else if(easing === 'ease-in-out'){

    }else {

    }
  }
}

let button = new UIElement()
button.animate(0,0,'ease-in')
button.animate(0,0,'uneasy') //会报错





