// https://youtu.be/Ti2Q4sQkNdU?t=3187
const cityField = "city";
const job = "Frontend";
const person = {
  age: 26,
  name: "Irina",
  job, // не обязательно писать job: job
  [cityField + Date.now()]: "Piter", // динамический ключ
  "country-live": "Russia",
  print: () => "Person", // не работает с контекстом!
  log() {
    console.log(this);
  },
  toString: function () {
    return Object.keys(this)
      .filter((key) => key !== "toString")
      .map((key) => this[key])
      .join(" ");
  },
};

/*
  Нововведения
  Object.keys(this) - вернёт массив ключей объекта
  Примечание:
  Стрелочные функции в объектах не могут работать с контекстом this!
*/

// console.log(person);

// Methods
const first = { a: 1 };
const second = { b: 2 };

console.log(Object.is(20, 2)); // false
console.log(Object.is(20, "20")); // false
console.log(Object.is(20, 20)); // true

// мутировал объект добавив в него свойства другого объекта
console.log(Object.assign(first, second));
console.log(Object.assign(first)); // { a: 1, b: 2 }
console.log(Object.assign(second)); // { b: 2 }
const third = Object.assign({}, first, second, { c: 4 }); // создал новый объект
console.log(third); // { a: 1, b: 2, c: 4 }

console.log(Object.entries(third));
console.log(Object.keys(third));
console.log(Object.values(third));
