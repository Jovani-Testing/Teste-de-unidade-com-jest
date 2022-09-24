const { somar }             = require("../src/calculator");
const { diminuir }          = require("../src/calculator");
const { multiplicar }       = require("../src/calculator");
const { dividir }           = require("../src/calculator");
const { somar_Multiplicar } = require("../src/calculator");
const { somar_somarb }      = require("../src/calculator");



test("Somar dois valores válidos", async () => {
  expect(somar(5, 10)).toStrictEqual(15);
});


test("Diminuir  dois valores válidos", async () => {
  expect(diminuir(5, 10)).toStrictEqual(-5);
});


test("Dividir  dois valores válidos", async () => {
  expect(multiplicar(5, 10)).toStrictEqual(50);
});


test("Dividir  dois valores válidos", async () => {
  expect(dividir(5, 10)).toStrictEqual(0.5);
});


test("Somar  dois valores válidos depois dividir por 2", async () => {
  expect(somar_Multiplicar(5, 10)).toStrictEqual(25);
});

test("Somar (a + b) + b", async () => {
  expect(somar_Multiplicar(5, 10)).toStrictEqual(25);
});



