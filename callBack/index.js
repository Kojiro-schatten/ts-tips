"use strict";
function mapFunc(array, callback) {
    const result = [];
    for (const arr of array) {
        result.push(callback(arr));
    }
    return result;
}
const numData = [1, 2, 3, 4, 5, 5, 7, 9];
const result = mapFunc(numData, num => num * 2);
console.log(result);
// 代替
function mapFuncA(array, callback) {
    const result = [];
    for (const arr of array) {
        result.push(callback(arr));
    }
    return result;
}
