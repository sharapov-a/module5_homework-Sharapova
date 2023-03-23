// Задание 8

let myMap = new Map();
myMap.set(1, 'apple');
myMap.set(12, true)


for (let name of myMap.keys()){
  console.log('ключ — Х', name)
}

for (let name of myMap.values()){
  console.log('значение — Y', name)
}
