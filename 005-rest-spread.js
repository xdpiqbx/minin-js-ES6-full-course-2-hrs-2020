// https://youtu.be/Ti2Q4sQkNdU?t=2165

// Rest - если не знаю сколько параметров приходит в функцию
function average(...args) {
  return (
    args.reduce((result, el) => {
      result += el;
      return result;
    }, 0) / args.length
  );
}

console.log(average(1, 2, 3, 4, 5));

// Spread
// например для клоннирования массивов
const fiboArr = [1, 1, 2, 3, 5, 8, 13, 21];
console.log(...fiboArr);
console.log(Math.max(...fiboArr));
const clonnedArr = [4, 5, 6, ...fiboArr];
console.log(clonnedArr); // [4, 5, 6, 1, 1, 2, 3, 5, 8, 13, 21]

// Destructuriztion
// const a = clonnedArr[0]
// const b = clonnedArr[1]
//можна задавать значения по умолчанию и пользоватся rest
const [a, b = 42, ...c] = clonnedArr;
console.log(a, b, c);
const [firstEl, , , , , sixEl] = clonnedArr;
console.log(firstEl, sixEl); // 4 2

// Object
const address = {
  country: "russ",
  city: "Rostov",
  street: "freedom",
  concat: function () {
    return `${this.country} ${this.city} ${this.street}`;
  },
};

const {
  city: town,
  country,
  street = "tverskaya",
  concat: addressConcat,
} = address;
// для concat нужен контекст
console.log(addressConcat.call(address));

const { city, ...rest } = address;

const newAdderes = { ...address, street: "Some Other", zipCode: 7167 };
// клонировал address, заменил свойство street и добавил zipCode
console.log(newAdderes);
