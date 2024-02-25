class Coche {
    modelo = ""
    potencia = 0
    precio = 40000.00
    
    constructor(modelo, potencia, precio) {
        this.modelo = modelo;
        this.potencia = potencia;
        this.precio = precio;
    }

   
    imprimir() {
        return `Datos Coche:
                Modelo: ${this.modelo}
                Potencia: ${this.potencia}
                Precio: ${this.precio}€`;
    }
}

// Definición de la clase Hijo que hereda de Coche
class CocheDeportivo extends Coche {
    
    constructor(modelo, potencia, precio, velocidadMaxima = 10) {
        super(modelo, potencia, precio); // Llamada al constructor de la clase padre (Coche)
        this.velocidadMaxima = velocidadMaxima;
    }

    // Método para imprimir los datos del coche deportivo
    imprimir() {
        return `Datos Coche Deportivo:
                Modelo: ${this.modelo}
                Potencia: ${this.potencia}
                Precio: ${this.precio}€
                Velocidad Máxima: ${this.velocidadMaxima} km/h`
    }
}

// Creación de una instancia de CocheDeportivo
let cocheFran = new Coche("Mercedes Benz Clase B", 100, 10000.00)
let cocheDeportivoFran = new CocheDeportivo("Ferrari", 700, 200000.00, 350);
alert(cocheDeportivoFran.imprimir());
alert(cocheFran.imprimir());

