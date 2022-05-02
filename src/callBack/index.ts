function mapFunc(array: number[], callback: (element: number) => number): number[] {
  const result: number[] = [];
  for(const arr of array) {
    result.push(callback(arr));
  }
  return result;
}
const numData: number[] = [1,2,3,4,5,5,7,9];
const result = mapFunc(numData, num => num * 2);
console.log(result);

// 代替
function mapFuncA<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for(const arr of array) {
    result.push(callback(arr));
  }
  return result;
}