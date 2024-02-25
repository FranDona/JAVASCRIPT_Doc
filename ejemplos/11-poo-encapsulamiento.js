class Coche {
    #modelo_coche = "" // Encapsulamiento: propiedades privadas
    #potencia = 0 // Encapsulamiento: propiedades privadas

    constructor(modelo, potencia) {
        this.#modelo_coche = modelo
        this.#potencia = potencia
    }

    imprimir() {
        return `Datos Coche:
                Modelo: ${this.#modelo_coche}
                Potencia: ${this.#potencia}`
    }

    // Métodos para obtener y establecer el modelo (ejemplo de getters y setters)
    get modelo_coche() {
        return this.#modelo_coche
    }

    set modelo_coche(nuevoModelo) {
        this.#modelo_coche = nuevoModelo
    }
}

let cocheFran = new Coche("Mercedes Benz Clase B", 350)
alert(cocheFran.imprimir())

// Cambiar el modelo usando el setter
let = nuevoModelo = prompt("Introduce el nuevo modelo:")
cocheFran.modelo_coche = nuevoModelo 
alert(cocheFran.imprimir())
