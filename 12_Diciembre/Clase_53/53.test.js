const sumar = (num1, num2) => {
    if (typeof num1 === "string" || typeof num2 === "string") {
        let stringANumero1 = Number(num1)
        let stringANumero2 = Number(num2)
        let suma = stringANumero1 + stringANumero2

        if (!suma) {
            return "Vuelva a ingresar"
        }

        return suma.toString()
    }
    return num1 + num2
}

test('suma 1 y 2 y devuelve 3', () => {
    expect(sumar(1, 2)).toBe(3);
});

test('suma "1" y "2" y devuelve "3"', () => {
    expect(sumar("1", "2")).toBe("3");
});

test('suma "asd" y "fgh" y devuelve "Vuelva a ingresar"', () => {
    expect(sumar("asd", "fgh")).toBe("Vuelva a ingresar");
});

test('suma "" y "" y devuelve "Vuelva a ingresar"', () => {
    expect(sumar("", "")).toBe("Vuelva a ingresar");
});


test('suma 0 y 0 y devuelve 0', () => {
    expect(sumar(0, 0)).toBe(0);
});


test('suma "0" y "0" y devuelve "0"', () => {
    expect(sumar(0, 0)).toBe(0);
});