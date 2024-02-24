function sumar() {

    let num1 = parseInt(prompt("Dame nº1"))
    let num2 = parseInt(prompt("Dame nº2"))
    let resultado = num1 + num2
    alert(resultado)
}

function restar() {

    let num1 = parseInt(prompt("Dame nº1"))
    let num2 = parseInt(prompt("Dame nº2"))
    let resultado = num1 - num2
    alert(resultado)
}

function multiplicar() {

    let num1 = parseInt(prompt("Dame nº1"))
    let num2 = parseInt(prompt("Dame nº2"))
    let resultado = num1 * num2
    alert(resultado)
}

function dividir() {

    let num1 = parseInt(prompt("Dame nº1"))
    let num2 = parseInt(prompt("Dame nº2"))
    let resultado = num1 / num2
    alert(resultado)
}


function iniciar() {
    let opcion = 0
    let mensaje = "Menu de opciones \n" +
                  "1. Sumar \n" +
                  "2. Restar \n" +
                  "3. Multiplicar \n" +
                  "4. Dividir \n" +
                  "5. Salir "
                  
        while (opcion !=5){
            lectura = prompt(mensaje)
            if(lectura == null)
                break;
            else
                opcion = parseInt(lectura)

            switch(opcion) {
                case 1:
                    sumar();
                    break;
                case 2:
                    alert(restar())
                    break;
                
                    case 3:     
                        let n1 = parseInt(prompt("Dame nº1:"))
                        let n2 = parseInt(prompt("Dame nº2:"))
                        multiplicar(n1, n2);                
                        break;

                    case 4:    
                        let num1 = parseInt(prompt("Dame nº1:"))
                        let num2 = parseInt(prompt("Dame nº2:"))
                        alert(dividir(num1, num2))      
                        break;

                    case 5:     
                        alert("Adios!")        
                        break;

                    default:    
                        alert("Elije 1-5!")    
                        break;
            }
        }
}



/*
    Si queremos vincular este archivo
    utilizaremos: 
    <script src="08-funcionesPropias.js"></script>
*/