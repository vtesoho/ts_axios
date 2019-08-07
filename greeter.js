//展开
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let first = [1,2]
// let second = [3,4]
// //这里是一个浅拷贝，对于bothPlue操作是不对影响 first和 second
// let bothPlue= [0,...first,...second,5]
// console.log(bothPlue)
//对象的展开
var defauts = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
//相同的key会覆盖，后面的会覆盖前面的
var search = __assign({}, defauts, { food: 'rich' });
console.log(search);
