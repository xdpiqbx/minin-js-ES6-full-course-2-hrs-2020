{
  // var num = 42; // так было раньше
  // if (true) {
  //   var a = 42;
  // }
  // console.log(a); // всё ок 42
}

{
  // с let так нельзя
  // переменные выдны в пределах области видимости
  // if (true) {
  //   let b = 42;
  // }
  // console.log(b); // ReferenceError: b is not defined
}
{
  // с let так нельзя
  // переменные выдны в пределах области видимости
  // let c = 24;
  // if (true) {
  //   let c = 42;
  //   console.log(`c -> ${c}`); // c -> 42
  // }
  // console.log(c); // 24
}
{
  // Hoisting
  // a = 10;
  // console.log(a); // 10
  // console.log(b); // ReferenceError: b is not defined
  // b = 20;
  // console.log(c); // undefined
  // var c = 20;
  // console.log(d); // Cannot access 'd' before initialization
  // let d = 30;
  // console.log(e); // Cannot access 'd' before initialization
  // const e = 40;
  // Короче, по нормальному это
  // объяви переменную, а потом к ней обращайся
}

{
  // function hoisted() {
  //   age = 26;
  // }
  // let age;
  // hoisted();
  // console.log(age); // 26
}

{
  // Const запрещает переопредиление

  // const COLOR = "#ffeebb";
  // COLOR = "#000"; // TypeError: Assignment to constant variable.
  // Примитивы работают как нормальные константы

  //В Массивах и объектах - можно менять внутреннее состояние
  const arrOne = [1, 1, 2, 3];
  const test = [5, 8];
  // arrOne = test; // TypeError: Assignment to constant variable.
  // arrOne = [...arrOne, ...test]; // TypeError: Assignment to constant variable.
  arrOne.push(...test); // Всё Ок
  console.log(arrOne); // [ 1, 1, 2, 3, 5, 8 ]

  const man = { name: "Igor" };
  const woman = { name: "Elen" };
  // man = woman; // TypeError: Assignment to constant variable.
  man.name = "Max";
  woman.name = "Ira";

  console.log(man); // { name: 'Max' }
  console.log(woman); // { name: 'Ira' }
}
