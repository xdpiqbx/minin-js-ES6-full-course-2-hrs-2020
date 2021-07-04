// https://youtu.be/Ti2Q4sQkNdU?t=5177
// https://www.youtube.com/watch?v=dV7KAx6-L-M - тож хорошее видео по генераторам

const array = [10, 20, 30, 40];
const str = "Hello";

/*
  console.log(array[Symbol.iterator]);
  console.log(str[Symbol.iterator]);

  const iter01 = array[Symbol.iterator]();
  console.log(iter01.next()); // { value: 10, done: false }
  console.log(iter01.next()); // { value: 20, done: false }
  console.log(iter01.next()); // { value: 30, done: false }
  console.log(iter01.next()); // { value: 40, done: false }
  console.log(iter01.next()); // { value: undefined, done: true } - значит дошел до конца итератора

  const iter02 = str[Symbol.iterator]();
  console.log(iter02.next()); // { value: 'H', done: false }
  console.log(iter02.next()); // { value: 'e', done: false }
  console.log(iter02.next()); // { value: 'l', done: false }
  console.log(iter02.next()); // { value: 'l', done: false }
  console.log(iter02.next()); // { value: 'o', done: false }
  console.log(iter02.next()); // { value: undefined, done: true } - значит дошел до конца итератора
*/

// //*************************/
// for (let item of array) {
//   console.log(item);
// }
// //*************************/
// for (let item of str) {
//   console.log(item);
// }

//*************************/
// Создание собственного итератора
const country = {
  test: "toso",
  values: ["ru", "kz", "ua", "by"],
  // Можно определить уникальный Symbol.iterator который работает с циклом for ... of
  // Также можно будет преобразовать в массив Array.from(country).forEach((el) => console.log(el));
  // Цикл for ... of смотрит за итератором
  [Symbol.iterator]() {
    let i = 0;
    // Обязательно из Symbol.iterator нужно вернуть объект у которого есть метод next
    return {
      next: () => {
        // стрелочная - специально чтоб не создавать свой контекст
        const value = this.values[i];
        //***
        // тут по сути можно работать с логикой перебора объекта и преобразования итерируемого значения
        //***
        i += 1;
        // вернуть объект -> { value: 'l', done: false }
        return {
          value,
          done: i > this.values.length,
        };
      },
    };
  },
};

// for (let item of country) {
//   console.log(item);
// }

// Array.from(country).forEach((el) => console.log(el));

// Generator не забывать что она со звёздочкой! -> *
function* gen(num = 4) {
  for (let i = 0; i < num; i += 1) {
    try {
      yield i;
    } catch (error) {
      console.log("=== Error!!! ===", error);
    }
  }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.throw("Some error")); // можно выдавать ошибки (итерация будет пропущена)
console.log(iter.next());
console.log(iter.next());

// for (let i of gen(4)) {
//   console.log(i);
// }

//*********************************************** */
// дополнительно по генераторам
// генератор в отличии от итератора, сам следит за выполнением итератора и сам знает когда остановится
{
  function* getNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }

  const g1 = getNumbers();
  console.log(g1.next().value);
  console.log(g1.next().value);
  console.log(g1.next().value);
  console.log(g1.next().value);
  // Всё g1 отработал и вернуть его в первоначальное состояние нельзя

  const g2 = getNumbers();

  console.log([...g1]); // будет пустой [] поскольку вверху уже вызвал все итерации генератора
  console.log([...g2]); // [ 1, 2, 3 ]

  // Генераторы можно объединять
  function* getMoreNumbers() {
    yield* getNumbers();
    yield* getNumbers();
  }

  console.log([...getMoreNumbers()]); // [ 1, 2, 3, 1, 2, 3 ] можно прямо так без создания переменной
  console.log([...getMoreNumbers()]); // [ 1, 2, 3, 1, 2, 3 ] так он получается постоянно новый
}
{
  // в генераторы можно передавать аргументы
  // yield тож может вернуть значение
  // задача генераторов в том чтоб генерировать безконечные последовательности, не хранить их а генерировать
  function* getNumbers(arg) {
    yield 1;
    yield 2 + arg;
    const b = yield 3; // в "b" будет передано не 3, а то значение которое передам через .next()
    yield 4 + b;
  }
  // console.log([...getNumbers(5)]); // [ 1, 7, 3, NaN ]

  const g = getNumbers(5);
  console.log(g.next().value); // 1
  console.log(g.next().value); // 7
  console.log(g.next().value); // 3
  console.log(g.next(7).value); // эта 7 попадёт в "b" - результат 11
}
{
  console.log("Example: Generate delay");
  function* getValues() {
    let ms = 100;
    while (true) {
      yield ms;
      ms *= 2;
    }
  }

  const g = getValues();

  for (let i = 0; i < 10; i += 1) {
    console.log(g.next().value);
  }
}
