// これでも動作するが、式の型が先分かる場合、引数の型は省略できる
// const xRepeat: F = (num: number) => "x".repeat(num);
// contextual typing　と呼ばれる
const xRepeat = (num) => "x".repeat(num);
console.log(xRepeat(10));
const something = {
    // func: user => user.name,
    method: user => user.name
};
const getAge = (user) => String(user.age);
// something.func = getAge;
something.method = getAge;
function sum(nums) {
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}
const nums1 = [1, 10, 100];
console.log(sum(nums1)); // 111
const nums2 = [1, 10, 100, 1000];
console.log(sum(nums2)); //1111
function repeat(element, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
}
console.log(repeat("foo", 3));
console.log(repeat(1, 3));
// ジェネリクスとアロー函数
const repeater = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
// 複数の場合
const pair = (left, right) => [left, right];
const p = pair("uhyo", 26);
// 応用:extendsやオプショナル引数の合わせ技
const repeatWithExt = (element, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(element);
    }
    return result;
};
console.log(repeatWithExt({
    name: "uhyo",
    age: 25
}, 3));
function double(func) {
    return (arg) => func(func(arg));
}
const plus2 = double(x => x + 1);
export {};
