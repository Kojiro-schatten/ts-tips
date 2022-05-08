// クラス文で書く
class UserA {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isAdult(): boolean {
    return this.age >= 25;
  }
}
const kojiA = new UserA('koji', 29);
console.log(kojiA.name);
// console.log(koji.age); // error

// 簡易的な書き方
// class User {
//   constructor(public name: string, private age: number) {}
// }

// classWithType
class UserC<T> {
  name: string;
  #age: number;
  readonly data: T;
  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data;
  }
  public isAdult(): boolean {
    return this.#age >= 20;
  }
}
// 今回の場合、dataプロパティに対してUser<string>と、string値を持たせている
const kojiC = new UserC<string>('koji', 26, "extra data");

// TypeScriptのクラス宣言は、変数名の名前空間と型名の名前空間両方を含む宣言であるため、そのまま別の型にも適応できる。