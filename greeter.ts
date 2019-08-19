function extend<T, U>(first:T,second:U): T & U{
  let result = {} as T & U
  for(let id in first) {
    result[id] = first[id] as any
  }
  for(let id in second) {
    if(!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }
  return result
}


class Person {
  constructor(public name: string){
    
  }
}

interface Loggable {
  log():void
}

class ConsleLogger implements Loggable {
  log(){

  }
}

var jim = extend(new Person('jim'), new ConsleLogger())
jim.name
jim.log
