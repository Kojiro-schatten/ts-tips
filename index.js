"use strict";
const message = "hello world";
console.log(message);
console.log("Helloworld \\n");
const tru = true;
console.log(Number(tru) + 2);
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
