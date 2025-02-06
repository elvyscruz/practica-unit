const { suma, resta } = require('./index')

test("suma de 2 + 3 debe ser igual a 5", ()=> {
    expect(suma(2,3)).toBe(5);
});

test("resta de 3-2 debe ser igual a 1", ()=> {
    expect(resta(3,1)).toBe(2);
});