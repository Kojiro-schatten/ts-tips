/*
  T[]と、Array<T>は、同じ
  Array<T>は、組み込みのジェネリック型であり、型引数を一つ持つ。
*/
const arr1: boolean[] = [false, true]

const arr2: Array<{name: string}> = [
  {
    name: "Yamada"
  },
  {
    name: "Takayuki"
  },
  {
    name: "Takahiro"
  }
]

const arr3: (string | number | boolean | undefined)[] = [100, 200, 300, "hello", true, undefined];
