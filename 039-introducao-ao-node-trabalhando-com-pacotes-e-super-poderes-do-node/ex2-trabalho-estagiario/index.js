const fs = require("fs");

for (let i = 1; i <= 100; i++) {
  const text = `Lista 1 - Cálculo 1 - Exercício ${i}`;
  const filename = `${i}.txt`;
  fs.writeFileSync(filename, text);
}
