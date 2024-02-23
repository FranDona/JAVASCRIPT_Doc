let num = parseInt(prompt("Dame num (1-10)")); // Ej: 5

// Con While
let i = 1;
let mensaje = "";
while (i <=5) {
    mensaje  += i + "\n";
    i++;
}
alert(mensaje);

mensaje = "";
// Con For
// OJO, este i del for es DISTINTO del que está por encima del while
for (let i=1; i<=5; i++) {
    mensaje  += i + "\n";
}
alert(mensaje);


//let num = parseInt(prompt("Dame num (1-10)"));: Solicita al usuario que ingrese un número entre 1 y 10 y lo convierte a un número entero.
//while (i <=5) { ... }: Realiza un bucle mientras que i sea menor o igual a 5, mostrando en cada iteración el valor de i en el mensaje.
//for (let i=1; i<=5; i++) { ... }: Realiza un bucle donde i se inicializa en 1, se incrementa en cada iteración y se ejecuta mientras i sea menor o igual a 5, mostrando en cada iteración el valor de i en el mensaje. Es importante destacar que la variable i de este for es diferente de la variable i usada en el while.