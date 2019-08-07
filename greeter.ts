//展开

// let first = [1,2]
// let second = [3,4]
// //这里是一个浅拷贝，对于bothPlue操作是不对影响 first和 second
// let bothPlue= [0,...first,...second,5]
// console.log(bothPlue)



//对象的展开
let defauts = {
  food: 'spicy',
  price: '$10',
  ambiance: 'noisy'
}

//相同的key会覆盖，后面的会覆盖前面的
let search = {...defauts,food:'rich'}
console.log(search)