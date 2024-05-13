test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("one dollar should be 146,3 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = 3.5 / 1.07;
    const yenExpected = expected * 156.5;
    expect(fromDollarToYen(3.5)).toBe(yenExpected);
})

test("one yen should be 0.0055 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = 500 / 156.5;
    const poundExpected = expected * 0.87;
    expect(fromYenToPound(500)).toBe(poundExpected);
})