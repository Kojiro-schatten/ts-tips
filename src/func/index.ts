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