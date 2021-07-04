// https://youtu.be/Ti2Q4sQkNdU?t=4174
class Person {
  type = "Manu";
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`${this.name}, says hello`);
  }
  arrowGreet = () => {
    console.log(this.name);
  };
}

const max = new Person("Max");

// console.log(max);
// console.log(max.type); // Manu
// max.greet(); // Max, says hello
// max.arrowGreet(); // Max
// console.log(max.__proto__ === Person.prototype); // true

class Programmer extends Person {
  // static - вызывать из класа -> Programmer.jsGreet
  // со статическими методами та же история
  static jsGreet = "JS is awesome!";

  constructor(name, job) {
    // в класе наследнике должен быть вызван наследуемый конструктор
    super(name);
    this._job = job;
  }

  greet() {
    super.greet(); // сюда будет передан контекст Programmer
    console.log(`Rewritten`);
  }

  get job() {
    return this._job.toUpperCase();
  }

  set job(job) {
    // Тут например можно реализовывать разные валидации
    this._job = job;
  }
}

console.log(Programmer.jsGreet);

const frontend = new Programmer("John", "Forntend");
console.log(frontend);
frontend.greet(); // John, says hello Rewritten
console.log(frontend.job); //FORNTEND
frontend.job = "React JS";
console.log(frontend.job); //REACT JS
