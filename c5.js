//definición de objeto con {}
let twit = {
    //Nombre de propiedad (llave): valor de propiedad, <- (coma por si quieres otro valor abajo)
    autor: {
        nombre: "Guillermo",
        edad: 30
    },
    contenido: "Este es mi primer twit",
    likes: 0
}

//console.table para imprimir más esteticamente el contenido de un objeto
//console.table(twit)

/*
    Las llaves que no existan en nuestro objeto, al momento de intentar obtenerlas,
    resultaran en undefined
if (twit.autor != undefined) {
    console.log(twit.autor)
} else { 
    console.log("Autor no definido")
}
*/

//Object.keys nos regresa un arreglo con todas las llaves del objeto
let llaves = Object.keys(twit)

twit.likes++
//console.table(twit)



let publicaciones = []
publicaciones.push(twit)
publicaciones.push({
    autor: {
        nombre: "Silvina",
        edad: 20,
    },
    comentarios: ["Bravo", "Que fuerte"],
    contenido: "I love alterofilia",
    likes: 22
})
publicaciones.push({
    autor: {
        nombre: "Tomas",
        edad: 32
    },
    comentarios: [],
    contenido: ": p",
    likes: 189
})
//console.log(publicaciones)

for (let publicacion of publicaciones) {
    if (publicacion.autor.nombre == "Silvina") {
        for (let comentario of publicacion.comentarios) {
            console.log(comentario)
        }
    }
}