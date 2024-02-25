function sumar() {
    let num1 = parseInt(prompt("Dame nº1"));
    let num2 = parseInt(prompt("Dame nº2"));
    let resultado = num1 + num2;
    alert(resultado);
}

function restar() {
    let num1 = parseInt(prompt("Dame nº1"));
    let num2 = parseInt(prompt("Dame nº2"));
    let resultado = num1 - num2;
    return resultado; // Cambiado para devolver el resultado en lugar de mostrarlo con alert aquí.
}

function multiplicar(n1, n2) { // Parámetros n1 y n2 agregados.
    let resultado = n1 * n2; // Calcula el resultado usando los parámetros.
    alert(resultado);
}

function dividir(num1, num2) { // Parámetros num1 y num2 agregados.
    if (num2 === 0) { // Manejo de división por cero.
        alert("No se puede dividir por cero.");
    } else {
        let resultado = num1 / num2;
        return resultado; // Cambiado para devolver el resultado en lugar de mostrarlo con alert aquí.
    }
}

function iniciar() {
    let opcion = 0;
    let mensaje = "Menu de opciones \n" +
                  "1. Sumar \n" +
                  "2. Restar \n" +
                  "3. Multiplicar \n" +
                  "4. Dividir \n" +
                  "5. Salir ";
                  
    while (opcion !== 5) {
        let lectura = prompt(mensaje);
        if (lectura === null) {
            break;
        } else {
            opcion = parseInt(lectura);
        }

        switch (opcion) {
            case 1:
                sumar();
                break;
            case 2:
                alert(restar()); // Cambiado para mostrar el resultado devuelto por la función.
                break;
            case 3:
                let n1 = parseInt(prompt("Dame nº1:"));
                let n2 = parseInt(prompt("Dame nº2:"));
                multiplicar(n1, n2); // Pasar los números como argumentos.
                break;
            case 4:
                let num1 = parseInt(prompt("Dame nº1:"));
                let num2 = parseInt(prompt("Dame nº2:"));
                let division = dividir(num1, num2); // Cambiado para mostrar el resultado devuelto por la función.
                if (division !== undefined) {
                    alert(division);
                }
                break;
            case 5:
                alert("Adios!");
                break;
            default:
                alert("Elije 1-5!");
                break;
        }
    }
}

// Llamada a la función iniciar para iniciar el programa.
iniciar();



/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="08-funcionesPropias.js"></script>
*/