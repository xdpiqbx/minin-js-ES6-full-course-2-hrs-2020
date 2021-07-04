// https://youtu.be/Ti2Q4sQkNdU?t=6326

/*
  https://github.com/xdpiqbx/minin-complex-js-in-simple-language/blob/main/js/013-01-map.js
  Коротко о MAP

  const objPerson = {
    name: "John",
    age: 26,
    job: "Fullstack",
  };
  const entriesPerson = Object.entries(objPerson);
  // const entriesPerson = [
  //   ["name", "John"],
  //   ["age", 26],
  //   ["job", "Fullstack"],
  // ];

  map // ключами могут быть любые значения
  .set("newField", 42)
  .set(objPerson, "Value of object")
  .set(NaN, "Nan ???")
  .set(undefined, "undefined val")
  .set(null, "null here");

  Есть объект, преобразовываю его в entries из полученых entries создаю новую карту

  const map = new Map(entries); - создать объект карты
  map.get(key) - вернёт значение по ключу, ключом может быть даж объект
  map.set(obj, "Value") - ключом может быть любой тип данных, (null, undefined, NaN, объект)
  map.get(null) - получить значение по ключу null
  map.delete(null); - удалил entrie с ключом null
  map.has("job"); // true или false
  map.size - размер карты, сколько entries
  map.clear() - очистит карту
  map.entries() - вернёт MapIterator // каждый entry - массив из двух елементов
  map.values() - вернёт MapIterator // каждый entry - значение
  map.keys() - вернёт MapIterator // каждый entry - ключ
  map.forEach((val, key, map) => { ... } - в отличии от обычного forEach тут не index а key
  // Из карты можно делать массивы несколькими способами
    const arrFromMap1 = [...map];
    const arrFromMap2 = Array.from(map);
  // Так можно сделать объект
    const objFromMap = Object.fromEntries(map.entries());
*/

/*
  https://github.com/xdpiqbx/minin-complex-js-in-simple-language/blob/main/js/013-02-set.js
  Коротко о SET
  принимает массив чего угодно и вернёт только уникальные значения (не повторяющиеся)
  SET структура проще чем MAP и хранит только значения
  У SET есть только values
  НО для обратной совместимости с MAP есть и keys() и entries()
  
  console.log(set.values()); // SetIterator
  console.log(set.keys()); // SetIterator
  console.log(set.entries()); // SetIterator ключ и значения дублируют друг друга

  set.add(10).add(2).add(19).add(10).add(0); // добавить значение в set
  set.has(1); // true || false
  set.size; // количество елементов
  set.delete(1); // удалил елемент по значению
  set.clear(); // очистил set
*/
