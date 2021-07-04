// https://youtu.be/Ti2Q4sQkNdU?t=1679
/*
  '....', "....", `${variable}`
  ` ... ` - тут сохраняются все пробелы и переносы строк
*/

const title = "Hello";

const isVisible = () => Math.random() > 0.5;

const template = `
  ${isVisible() ? "<p>Visible</p>" : ""}
  <h1 id='demo' style="color: #000">${title}</h1>
`;

console.log(template);

// Methods
title.startsWith("h"); // true || false
title.endsWith("h"); // true || false
title.includes("ello"); // true || false
title.repeat(3); // HelloHelloHello
title.trim(); // удалить пробелы слева и справа
title.trimStart(); // удалить пробелы с начала
title.trimEnd(); // удалить пробелы с конца
title.trimLeft(); // удалить пробелы слева
title.trimRight(); // удалить пробелы справа
title.padStart(10, "-"); // добавит символы в начале '-----Hello'
title.padEnd(10, "123"); // добавит символы в конце 'Hello12312'
