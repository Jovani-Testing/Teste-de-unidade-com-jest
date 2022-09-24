const { obterCnh } = require("../src/cnh");

test("Validando chh idade 18 anos ", async () => {
    expect(obterCnh(21)).toBeTruthy();
  });

  test("Validando chh idade 18 anos ", async () => {
    expect(obterCnh(17)).toBeFalsy();
  });
  
