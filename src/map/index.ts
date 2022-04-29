const map: Map<string, number> = new Map();

map.set("Yamada", 100);

console.log(map.get("Yamada")) //100
console.log(map.get("foo")) //undefined

