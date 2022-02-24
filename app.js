

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (dollars) {
    return (dollars/ oneEuroIs.USD) *oneEuroIs.JPY
}

function fromEuroToDollar (euro) {
    return euro * oneEuroIs ['USD']
}

function fromYenToPound (yen) {
    return (yen / oneEuroIs.JPY) *oneEuroIs.GBP 
 
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum: sum, 
    fromEuroToDollar :fromEuroToDollar,
    fromDollarToYen :fromDollarToYen,
    fromYenToPound :fromYenToPound};