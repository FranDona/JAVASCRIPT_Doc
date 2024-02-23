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