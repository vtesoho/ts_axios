// function padLeft(value:string, padding: any){
//   if(typeof padding === 'number'){
//     return Array(padding+1).join(' ') + value
//   }
//   if(typeof padding === 'string') {
//     return padding + value
//   }
//   throw new Error(`Expected string or number got ${padding}`)
// }


// padLeft('hello world', 4)


// // 联合类型是几种类型之一，以|线分隔类型
// function padLeftA(value:string, padding: string | number){
//   if(typeof padding === 'number'){
//     return Array(padding+1).join(' ') + value
//   }
//   if(typeof padding === 'string') {
//     return padding + value
//   }
//   throw new Error(`Expected string or number got ${padding}`)
// }


// // padLeftA('hello world', true) //会报错 


// interface Bird{
//   fly()
//   layEggs()
// }

// interface Fish {
//   swim()
//   layEggs()
// }

// function getSmallPet(): Fish | Bird {
//   // ...
// }

// let pet = getSmallPet()
// pet.layEggs()
// pet.swim() // 会报错

// if((pet as Fish).swim) {
//   (pet as Fish).swim()
// }else if((pet as Bird).fly){
//   (pet as Bird).fly()
// }

//类型保护

// if(isFish(pet)){
//   pet.swim()
// } else {
//   pet.fly()
// }

// function isFish(pet: Fish | Bird): pet is Fish{
//   return (pet as Fish).swim != undefined
// }

// function isNumber(x:any): x is number{
//   return typeof x === 'number'
// }

// function isString(x:any): x is string{
//   return typeof x === 'string'
// }

// function padLeft(value: string,padding:string | number){
//   if(isNumber(padding)){
//     return Array(padding+1).join(' ')+ value
//   }
//   if(isString(padding)){
//     return padding + value
//   }
//   throw new Error(`Expected string or number , got ${padding}`)
// }

// //改进
// function padLeftA(value: string,padding:string | number){
//   if(typeof padding === 'number'){
//     return Array(padding+1).join(' ')+ value
//   }
//   if(typeof padding === 'string'){
//     return padding + value
//   }
//   throw new Error(`Expected string or number , got ${padding}`)
// }




class Bird{
  fly(){
    console.log('bird fly')
  }
  layEggs(){
    console.log('bird lay eggs')
  }
}

class Fish {
  swim(){
    console.log('Fish swim')
  }
  layEggs(){
    console.log('Fish lay eggs')
  }
}


//另一种
function getRandomPet(): Fish | Bird {
  return Math.random()>0.5 ? new Bird(): new Fish()
}

let pet = getRandomPet()

if(pet instanceof Bird){
  pet.fly
}

if(pet instanceof Fish){
  pet.swim
}






