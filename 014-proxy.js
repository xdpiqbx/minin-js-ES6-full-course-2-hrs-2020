// https://youtu.be/Ti2Q4sQkNdU?t=7152

// Это лучше посмотреть тут
// https://github.com/xdpiqbx/minin-complex-js-in-simple-language/blob/main/js/009-proxy-001.js
// https://github.com/xdpiqbx/minin-complex-js-in-simple-language/blob/main/js/010-proxy-002.js

/*
  Идея прокси в перехвате объекта и переопредиление его операций
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy#validation
*/

const form = {
  login: "tester",
  password: "12345",
};

const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет`;
  },
  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        `Длинна должна быть больше 2х символов. Сейчас ${value.length}`
      );
    }
  },
};

const formProxy = new Proxy(form, validator);

console.log(formProxy); // { login: 'tester', password: '12345' }
console.log(formProxy.login); // tester
console.log(formProxy.password); // 12345

formProxy.login = "A"; // Длинна должна быть больше 2х символов. Сейчас 1
formProxy.login = "Abcdef"; // Так всё отработает
formProxy.password = "Z"; // Длинна должна быть больше 2х символов. Сейчас 1

//https://youtu.be/Ti2Q4sQkNdU?t=7535
