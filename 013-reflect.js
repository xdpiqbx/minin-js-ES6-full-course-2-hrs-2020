// https://youtu.be/Ti2Q4sQkNdU?t=6779
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Reflect

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi my name is, ${this.name}. A am ${this.age} years old`);
  }
}

class ProtoStudent {
  university = "Oxford";
}

/*
  Reflect.construct(
    Таргер функция/класс,
    массив агрументов которые попадут в конструктор,
    прототип для ново созданного объекта
  )

  Reflect отработает как Object.create, НО -> Reflect болле современный подход
*/

const student1 = Reflect.construct(Student, ["John", 30]);
const student2 = Reflect.construct(Student, ["John", 30], ProtoStudent);

console.log(student1); // Student { name: 'John', age: 30 }
console.log(student2); // ProtoStudent { name: 'John', age: 30 }

console.log(student2.__proto__ === Student.prototype); // false
console.log(student2.__proto__ === ProtoStudent.prototype); // true

// Методы Reflect

/*
  Reflect.apply( // позволяет вызывать методы с нужным контекстом и параметрами
    student1.greet,
    контекст - тут объект в котором есть свойство name,
    [] - массив параметров вывзываемой ф-ции, );
  
  Reflect.ownKeys(student1)

  Reflect.preventExtensions(student1); // запретит создавать поля на лету

  Reflect.isExtensible(student1)
*/

Reflect.apply(student1.greet, { name: "Bill", age: 25 }, []); // позволяет вызывать методы с нужным контекстом и параметрами

console.log(Reflect.ownKeys(student1)); // [ 'name', 'age' ]

Reflect.preventExtensions(student1);

student1.city = "Kyiv"; // Reflect.preventExtensions(student1); запретил создавать поля на лету

console.log(Reflect.isExtensible(student1)); // Можно ли расширять объект? тут false (.preventExtensions)

console.log(student1);
