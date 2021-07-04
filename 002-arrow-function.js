{
  // через function
  function sum(a, b) {
    return a + b;
  }

  function cube(a) {
    return a ** 3;
  }
}

{
  // () => {}
  const sum = (a, b) => {
    return a + b;
  };

  const cube = (a) => {
    return a ** 3;
  };
}

{
  // () => {} ещё короче
  const sum = (a, b) => a + b;
  const cube = (a) => a ** 3;
}

{
  // setTimeout(function () {
  //   console.log("function After second");
  // }, 1000);
  // setTimeout(() => {
  //   console.log("() => {} After 2 second");
  // }, 2000);
}

{
  // Context
  // стрелочная не принимает контекст
  function log() {
    // содержит контекст объекта из под которого вызывается
    console.log(this);
  }

  const arrowLog = () => {
    // по умолчанию указывает на контекст который выше, контекст global, window
    console.log(this);
  };

  const person = {
    name: "John",
    age: 30,
    log: log,
    arrowLog: arrowLog, // так нельзя тут контекст будет global
    arrowLog: arrowLog.bind(this),
    delayLog() {
      // const self = this;
      // setTimeout(function () {
      //   // setTimeout доступен из под global, window поэтому и контекст оттуда
      //   console.log(self.name + " " + self.age); //undefined undefined
      // }, 500);
      setTimeout(() => {
        // ()=>{} не хранит контекст global, window
        console.log(this.name + " " + this.age); //undefined undefined
      }, 500);
    },
  };

  person.log();
  person.arrowLog(); // тут будет пустой объект (контекст будет global)
  // в браузере указывает на window
  person.delayLog();
}
