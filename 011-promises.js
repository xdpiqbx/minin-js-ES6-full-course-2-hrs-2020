// https://youtu.be/Ti2Q4sQkNdU?t=5733
// Идея промисов в том чтоб оборачивать асинхронный код чтоб было проще с ним взаимодействывать
// Чтоб убрать большой уровень вложенности коллбеков
{
  const promise01 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 500);
  });

  promise01.then((data) => console.log(data)); // Success
}
{
  const delay = (ms) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // тут можно завернуть в try{ ... }catch(e){reject(e)}
        resolve(`"Delay done" ${ms}ms`);
      }, ms);
    });

  delay(1000)
    .then(() => delay(500))
    .then((data) => console.log(data))
    .catch((error) => {
      // если отработает reject
      console.log(error);
    })
    .finally(() => {
      //отработает в любом случае
      console.log("Finnaly done");
    });
}
{
  // async await
  const delay = (ms) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`"Delay done" ${ms}ms`);
      }, ms);
    });

  async function asyncDelay() {
    try {
      const data = await delay(1000);
      console.log("asyncDelay()", data);
    } catch (error) {
      // попаду сюда если произойдёт reject()
      console.log(error);
    }
  }
  asyncDelay();
}
{
  // Promise.all и Promise.race и Promise.any
  // Promise.race -> Wait until any of the promises is resolved or rejected
  // Promise.any -> returns a single promise that resolves with the value from that promise
  const delay = (ms) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`"Delay done" ${ms}ms`);
      }, ms);
    });
  // Принимает массив промисов, и дожидается выполнения всех промисов
  Promise.all([delay(100), delay(200), delay(300)]).then((data) => {
    // data - массив результатов вывполнения всех промисов
    console.log(data); //[ '"Delay done" 100ms', '"Delay done" 200ms', '"Delay done" 300ms' ]
  });
  Promise.race([delay(100), delay(200), delay(300)]).then((data) => {
    // какой промис первый выполнился тот и попал в data
    console.log(data); //"Delay done" 100ms
  });
}
