let edad = parseInt(prompt("Dime tu edad"))
if(edad <18) {
    alert("Eres menor de edad")
} else if(edad <65) {
    alert("Eres un adulto")
} else {
    alert("Perteneces a la tercera edad")
}

//let edad = parseInt(prompt("Dime tu edad")): Solicita al usuario que ingrese su edad y la convierte a un número entero.
//if(<18) { ... }: Verifica si la edad ingresada es menor que 18. Si es así, muestra un mensaje indicando que la persona es menor de edad.
//else if(edad <65) { ... }: Si la edad no es menor de 18, verifica si es menor que 65. Si es así, muestra un mensaje indicando que la persona es un adulto.
//else { ... }: Si la edad no es ni menor que 18 ni menor que 65, muestra un mensaje indicando que la persona pertenece a la tercera edad.

/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="03-if.js"></script>
*/