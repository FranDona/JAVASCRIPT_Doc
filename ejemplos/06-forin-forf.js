let vehiculos = ["Moto", "Coche", "Camion",]

    // Con for...in
    let mensaje = "";
    for (let indice in vehiculos) {
        mensaje += vehiculos[indice] + "\n";
    }
    alert(mensaje);

// Se declara una variable mensaje para almacenar el contenido que se mostrará en la ventana de alerta.
// El bucle for...in itera sobre los índices del array frutas. En cada iteración, indice toma el valor de un índice del array.
// Usando frutas[indice], se accede al elemento correspondiente en el array frutas utilizando el índice actual.
// El valor de cada elemento se agrega a la variable mensaje, seguido de un salto de línea ("\n").
// Finalmente, se muestra el contenido de mensaje en una ventana de alerta.

    
    // Con for...of (es similar al foreach de otro lenguajes)
    mensaje = "";
    for (let vehiculo of vehiculos) {
        mensaje += vehiculo + "\n";
    }
    alert(mensaje);

// Se reinicia la variable mensaje para almacenar el nuevo contenido.
// El bucle for...of itera directamente sobre los elementos del array frutas. En cada iteración, fruta toma el valor de un elemento del array.
// El valor de cada elemento se agrega a la variable mensaje, seguido de un salto de línea ("\n").
// Finalmente, se muestra el contenido de mensaje en una ventana de alerta.

/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="05-while-for.js"></script>
*/