import { DebugLoggerFunction } from "util";

type F = (num: number) => string;
// これでも動作するが、式の型が先分かる場合、引数の型は省略できる
// const xRepeat: F = (num: number) => "x".repeat(num);
// contextual typing　と呼ばれる
const xRepeat: F = (num) => "x".repeat(num);
console.log(xRepeat(10));

// 部分型
type HasName = {
  name: string;
}
type HasNameAndAge = {
  name: string;
  age: number;
}
// const fromAge = (age: number): HasNameAndAge => ({
//   name: "John",
//   age: 22,
// })
// const f: (age: number) => HasName = fromAge;
// const object: HasName = f(22);

type Obj = {
  // func: (arg: HasName) => string;
  method(arg: HasName): string;
}
const something: Obj = {
  // func: user => user.name,
  method: user => user.name
}
const getAge = (user: HasNameAndAge) => String(user.age);
// something.func = getAge;
something.method = getAge;

function sum(nums: readonly number[]): number {
  let result = 0;
  for(const num of nums) {
    result += num;
  }
  return result;
}

const nums1: readonly number[] = [1,10,100];
console.log(sum(nums1)); // 111
const nums2: readonly number[] = [1,10,100,1000];
console.log(sum(nums2)); //1111

function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for(let i = 0; i< length; i++) {
    result.push(element);
  }
  return result;
}
console.log(repeat<string>("foo", 3));
console.log(repeat<number>(1, 3));

// ジェネリクスとアロー函数
const repeater = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for(let i = 0; i< length; i++) {
    result.push(element);
  }
  return result;
}

// 複数の場合
const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [left, right];
const p = pair<string, number>("uhyo", 26);

// 応用:extendsやオプショナル引数の合わせ技
const repeatWithExt = <T extends {
  name: string;
}>(element: T, length: number): T[] => {
  const result: T[] = [];
  for(let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}

console.log(repeatWithExt<HasNameAndAge>({
  name: "uhyo",
  age: 25
}, 3))

function double<T>(func: (arg: T) => T): (arg: T) => T {
  return (arg) => func(func(arg));
}
type NumberToNumber = (arg: number) => number;
const plus2: NumberToNumber = double(x => x + 1);