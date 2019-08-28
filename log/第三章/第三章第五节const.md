## 第三章第五节const

```js
//const 与let的作用域一样，但是不能在次赋值
const numLivesForCat = 9


const kitty = {
  name: 'Kitty',
  numLives: numLivesForCat
}

//不能在次赋值
kitty = {
  name: 'Kitty',
  numLives: numLivesForCat
}

//但是能对他的属性做修改
kitty.name = 'jerry'
kitty.numLives--

//大部分不去修改的变量都用const
```