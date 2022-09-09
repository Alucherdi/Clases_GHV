function promedio(estudiante) {
    let sum = 0
    for (let calificacion of estudiante.calificaciones) {
        sum = suma(sum, calificacion)
    }

    return sum / estudiante.calificaciones.length
}

function suma(a, b) {
    return a + b
}

let erandy = {
    calificaciones: [8, 8, 3, 7]
}

console.log(promedio(erandy))




/*
function aplicaOperacion(operacion, a, b) {
    return operacion(a, b)
}

function multiplicacion(a, b) {
    return a * b
}

console.log(aplicaOperacion(multiplicacion, 2, 3))
*/

function saludar() {
    console.log("Hola")
}

setInterval(saludar, 1000)