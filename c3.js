/*let iterador = 0

while (iterador <= 5) {
    iterador = iterador + 1

    if (iterador == 2) {
        continue
    }

    console.log(iterador)
}

console.log("El iterador al final del ciclo es: " + iterador)*/
let a = 0
for (let iterador = 1; iterador <= 10; iterador++) {
    if (iterador < 7) {
        a += iterador
    } else {
        a -= iterador
    }
}

console.log(a)