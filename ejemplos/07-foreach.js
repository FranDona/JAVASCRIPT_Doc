let vehiculos = [
    {
        Coches: {
            Mercedes: "Clase A y Clase E",
            BMW:"BMW X5 y BMW Serie 3",
        },
    },
    {
        Motos: {
            Honda: "CBR 1000 y CBR 600",
            Kawasaki : "Ninja y KX 85",
        },
    },
]

vehiculos.forEach((elemento) => {
    for (let concesionario in elemento) {
        mensaje += "Vehiculos en venta " + concesionario + "\n"
        for (let clave in elemento[concesionario]) {
            mensaje += clave + " : " + elemento[concesionario][clave] + "\n"
        }
        mensaje += "\n"
    }
});
alert(mensaje)


//El array vehiculos contiene objetos anidados que representan diferentes tipos de vehículos (Coches y Motos) y sus modelos.
//Se utiliza el método forEach() para iterar sobre cada elemento del array vehiculos.
//Para cada elemento, se utiliza un bucle for...in para iterar sobre las propiedades del elemento (en este caso, Coches o Motos).
//Se construye un mensaje que contiene los nombres de los vehículos y sus modelos.
//Finalmente, se muestra el mensaje en una ventana de alerta utilizando alert().

/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="07-foreach.js"></script>
*/