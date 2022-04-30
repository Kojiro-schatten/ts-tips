"use strict";
/**
 Record<key, types>
 Record<Keys, Type>はプロパティのキーがKeysであり、プロパティの値がTypeであるオブジェクト型を作るユーティリティ型です
 key: オブジェクトのプロパティキーを指定する
 type: オブジェクトのプロパティの値の型を指定する
 例
 type StringNumber = Record<string, number>;
 const value: StringNumber = { a: 1, b: 2, c: 3 };
**/
const transform = (source, splitTarget = "_") => {
    const target = Object.create(null);
    Object.entries(source).forEach(([key, value]) => {
        key.split(splitTarget).slice(0, -1).reduce((node, element) => {
            return node[element] ?? (node[element] = {});
        }, target)[key.slice(key.lastIndexOf("_") + 1)] = value;
    });
    return target;
};
const beforeTransform = {
    a_b_c: "value"
};
console.log(transform(beforeTransform));
/**
 {
   a: {
     b: {
       c: 'value'
      }
    }
  }
**/
