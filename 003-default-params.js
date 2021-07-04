//https://youtu.be/Ti2Q4sQkNdU?t=1431
const defaultA = 50;

const defaultC = (a = 2) => {
  return a ** 2;
};

function compute(a = defaultA, b = 4, c = defaultC(a)) {
  return a + b + c;
  // 5 + 4 + 25
}

console.log(compute(5));
