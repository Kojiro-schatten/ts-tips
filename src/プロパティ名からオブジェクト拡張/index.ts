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