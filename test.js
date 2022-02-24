// importar la función sum del archivo app.js
const { sum, 
    fromEuroToDollar, 
    fromDollarToYen,
    fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 2 + 2 to equal 4', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(2, 2);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(4);
});

test('adds 14+ 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function(){

    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test('100 dollr should be ~10658 yens', () => {
    const yens = fromDollarToYen(100)
    const expected = (100 / 1.2) *127.9
    expect (yens ).toBe (expected)  
})