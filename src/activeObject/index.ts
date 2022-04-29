const propName = "foo"
const obj = {
  [propName]: 123,
}

console.log(obj[propName]);
// propNameがどんな値になっても、123という値が返される

/**
 tips: オブジェクトのプロパティとconst
 変数がconst で宣言されている場合、変数に再代入することはできないが、
 その中身（プロパティ）に関しては、再代入可能である
 ただし、好まれないため、スプレッド演算子などで再生成する方が良いだろう
 */

// obj2は、{ "foo": 123, bar: 456 }
const obj2 = {
  ...obj,
  bar: 456
}
