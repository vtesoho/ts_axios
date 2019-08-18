function identity(arg) {
    return arg;
}
// let output = identity<string>('myString')
//ts会自动帮我们推断类型
var output = identity('myString');
//泛型参数
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = identity;
//泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var stringNumberic = new GenericNumber();
stringNumberic.zeroValue = 'adfds';
stringNumberic.add = function (x, y) {
    return x + y;
};
console.log(stringNumberic.add(stringNumberic.zeroValue, 'test'));
//泛型约束
function loggingIdentitya(arg) {
    console.log(arg.length);
    return arg;
}
