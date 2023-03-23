//Задание 6

function hasRepeat(arr) {
  return new Set(arr).size !== arr.length;
}
let  arr = [1, 2, 4, 6, 5, 1];

if (hasRepeat(arr)) {
  console.log("true");
}
else {
  console.log("false");
}
