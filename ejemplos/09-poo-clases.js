class Coche {
    modelo = ""
    potencia = 0
    precio = 40000.00


    // El constructor es el método que instancia la clase
    constructor(modelo, potencia){
        this.modelo = modelo
        this.potencia = potencia
    }

    // Método imprimir (2 opciones -> En formato String o formato JSON)
    imprimir(){
        return `Datos Coche:
                Modelo: ${this.modelo}
                Potencia: ${this.potencia}
                Precio: ${this.precio}€`
    }
    
}

//Imprimimos datos en un alert
 let cocheFran = new Coche("Mercedes Benz Clase B", 350, 57000.00)
 alert(cocheFran.imprimir())
