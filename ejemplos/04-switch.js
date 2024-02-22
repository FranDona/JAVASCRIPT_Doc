let nota = parseInt(prompt("Dane nota"))
switch (nota) {
    case 10:
    case 9:
        alert("Sobresaliente!")
        break;
        
    case 8:
    case 7:
        alert("Notable")
        break;

    case 6:
    case 5:
        alert("Aprobadó")
        break;

    default:
        alert("Suspenso")
        break;
}

//let nota = parseInt(prompt("Dame nota")): Solicita al usuario que ingrese su nota y la convierte a un número entero.
//switch (nota) { ... }: Evalúa la variable nota y ejecuta el código correspondiente según su valor.
//case 10 9: Si la nota es 10 o 9, muestra un mensaje indicando "Sobresaliente!".
//case 8 y 7: Si la nota es 8 o 7, muestra un mensaje indicando "Notable".
//case 6 y 5: Si la nota es 6 o 5, muestra un mensaje indicando "Aprobado".
//default: Si la nota no coincide con ninguno de los casos anteriores, muestra un mensaje indicando "Suspenso".


/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="04-switch.js"></script>
*/