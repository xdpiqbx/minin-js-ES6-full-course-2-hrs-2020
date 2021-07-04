//https://youtu.be/Ti2Q4sQkNdU?t=4830

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

/*
  Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that’s guaranteed to be unique
  Symbol - встроенный объект, конструктор которого возвращает примитив symbol, обычно назывется - "значение символа" или просто "символ" - он всегда гарантировано уникален!
*/

const symbol01 = Symbol("demo");
const symbol02 = Symbol("demo");

console.log(symbol01);
console.log(symbol02);

// Основная особенность Символов - они все уникальны
// Символ - для задавания метаданных объектов и классов
console.log(symbol01 == symbol02); // false
console.log(symbol01 === symbol02); // false

//****************************************

const obj = {
  name: "Elena",
  demo: "DEMO",
  [symbol01]: "meta",
};

console.log(obj);
console.log(obj[symbol01]); // meta

for (let key in obj) {
  // Этот цикл бежит даже по прототипу!
  // Не видит символов
  console.log(`key => ${key}`); // видит только name и demo!
}
