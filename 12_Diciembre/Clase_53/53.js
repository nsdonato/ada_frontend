const sumar = (num1, num2) => { return num1 + num2 }
// este test pasa
test('sumo 1 y 2 y devuelve 3', () => { expect(sumar(1, 2)).toBe(3); });
// este test pasa
test('sumo -1 y -2 y espero que el resultado sea -3', () => { expect(sumar(-1, -2)).toBe(-3); });
// este test no pasa
test('sumo "1" y "2" y espero que el resultado sea "3"', () => { expect(sumar("1", "2")).toBe("3"); });