/**
 Record<key, types>
 Record<Keys, Type>はプロパティのキーがKeysであり、プロパティの値がTypeであるオブジェクト型を作るユーティリティ型です
 key: オブジェクトのプロパティキーを指定する
 type: オブジェクトのプロパティの値の型を指定する
 例
 type StringNumber = Record<string, number>;
 const value: StringNumber = { a: 1, b: 2, c: 3 };
**/ 
const transform = (source: Record<string, any>, splitTarget: string="_"): Record<string, any> => {
  const target = Object.create(null);
  Object.entries(source).forEach(([key, value]) => {
    key.split(splitTarget).slice(0, -1).reduce((node: Record<string, any>, element: string) => {
      return node[element] ??= {};
    }, target)[key.slice(key.lastIndexOf("_") + 1)] = value;
  });
  return target;
}

const beforeTransform = {
  a_b_c: "value"
}

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
