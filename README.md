# JAVASCRIPT_Doc
--------------

[//]: # (version: 1.0)
[//]: # (author: Fran Dona)
[//]: # (date: 2024-02-22)



# Tabla de contenidos
- [JAVASCRIPT\_Doc](#javascript_doc)
- [Tabla de contenidos](#tabla-de-contenidos)
  - [¿Qué es JavaScript?](#qué-es-javascript)
  - [Estructura proyecto](#estructura-proyecto)
    - [Usar js dentro de html](#usar-js-dentro-de-html)
    - [Vincular archivos js](#vincular-archivos-js)
  - [Nuestro primer Hola Mundo](#nuestro-primer-hola-mundo)
  - [Tipos de datos en JS](#tipos-de-datos-en-js)
  - [Utilización de prompt](#utilización-de-prompt)
    - [Utilización de confirm prompt](#utilización-de-confirm-prompt)
  - [Uso de IF](#uso-de-if)
  - [Uso de Switch](#uso-de-switch)
  - [Uso de While](#uso-de-while)
  - [Uso de For](#uso-de-for)
  - [Uso de For In y For Of](#uso-de-for-in-y-for-of)
      - [Citas Coloreadas](#citas-coloreadas)



## ¿Qué es JavaScript?
JavaScript es un lenguaje de programación esencial para la web, permite hacer páginas interactivas y dinámicas. Se usa para animaciones, validaciones de formularios y comunicación con servidores.

## Estructura proyecto

### Usar js dentro de html

```html
<!-- Documento index.hmtl -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo JS</title>
    <script>
       window.alert("Hola desde el HEAD");
    </script>
</head>
<body>
    <script>
        /* Comentario de 
        Varias líneas */
       window.alert("Hola desde el BODY");
    </script>
</body>
</html>
```

> [!NOTE]  
> Podemos usar la etiqueta `<script>` en cualquier parte del documento. Sin embargo, es una buena práctica colocar los scripts JavaScript en la sección `<head>` o al final del `<body>`


### Vincular archivos js
Documento HTML:
```html
<!-- Documento index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo JS</title>
    <script src="holaMundo.js"> //Vinculacion archivo externo
</head>
<body>
    
</body>
</html>
```
 
Documento JavaScript Externo
```js
// Documento holamundo.js
window.alert("Hola desde el HEAD");
```

## Nuestro primer Hola Mundo
Para pintar nuestro primer Hola Mundo usaremos un "alert" esto abrirá una ventana emergente al usuario con los datos que introduzcamos:
```js
window.alert("Hola Mundo")
//También podemos omitir "window"
alert("Hola Mundo")
```

## Tipos de datos en JS
- Numéricos (int, float)
- Booleanos (boolean)
- Caracteres (String)
- Especiales (arrays, object) 
<br><br>
**Las conversiones de string son:**
- parseInt (String -> int)
- parseFloat (String -> Float) 
- boolean (String -> Booleano)

```js
//Ejemplo String -> int
num = parseInt(window.prompt("Introduce un número"));
```

> [!IMPORTANT]  
> Hay que tener encuenta que los **pronpt** siempre devolveran un string, por eso la importancia de tiparlos con **parseInt**, **parseFloat**, **boolean**.


## Utilización de prompt

**Prompt** es una función de JavaScript que muestra una **ventana emergente** con un mensaje y un campo de entrada, **permitiendo al usuario ingresar datos.**

```js
let num = 0 //Almacenar variable num 
num = parseInt(window.prompt("Dame un número"))
window.alert("Tu numero es:" + num)
```

### Utilización de confirm prompt

```js
let pregunta = window.confirm("Te gusta la documentacion de FranDona?")
if (pregunta == true) {
    alert("Me alegro!")
} else {
    alert("Es una pena")
}
``` 

## Uso de IF

Igual que en el anterior ejemplo, con la diferencia de que el usuario introducirá el dato.

```js
let edad = parseInt(prompt("Dime tu edad"))
if(edad <18) {
    alert("Eres menor de edad")
} else if(edad <65) {
    alert("Eres un adulto")
} else {
    alert("Perteneces a la tercera edad")
}
```

> [!NOTE]  
>Todos los datos que pasan a traves del prompt son String por lo que tenemos que tiparlo con **parseInt**

## Uso de Switch
En este ejemplo podemos ver como al usuario le permitimos introducir un valor (suponemos que sabe que solo se puede del 1 al 10) nuestra funcion switch revisara los diferentes casos para sacar un alert
```js
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
```

## Uso de While

El bucle while se utiliza para ejecutar un bloque de código repetidamente mientras una condición especificada sea evaluada como verdadera. La estructura general de un bucle while es la siguiente:

```js
let i = 1;
while (i <= 5) {
    console.log(i)
    i++
}
```

Este bucle se ejecutará mientras i sea menor o igual a 5. En cada iteración, se imprimirá el valor de i y luego se incrementará en 1. Cuando i sea 6, la condición i <= 5 será falsa y el bucle se detendrá.


## Uso de For

El bucle for se utiliza para ejecutar un bloque de código un número específico de veces. Es especialmente útil cuando sabes cuántas veces necesitas que se ejecute el bucle. La estructura general de un bucle for es la siguiente:

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
Este bucle comienza con i inicializado en 1, se ejecuta mientras i sea menor o igual a 5, e incrementa i en 1 en cada iteración. Se imprimirán los números del 1 al 5 en la consola. Una vez que i llega a 6, la condición i <= 5 se vuelve falsa y el bucle termina.

## Uso de For In y For Of
**for...in** itera sobre las propiedades enumerables de un objeto, incluidos los índices en arrays, mientras que **for...of** itera sobre los valores de un objeto iterable, manteniendo el orden y omitiendo las propiedades del prototipo.

```js
let vehiculos = ["Moto", "Coche", "Camion",];
    let mensaje = "";
    for (let indice in frutas) {
        mensaje += vehiculos[indice] + "\n";
    }
    alert(mensaje);
```

```js
let vehiculos = ["Moto", "Coche", "Camion",]
    mensaje = "";
    for (let vehiculo of vehiculos) {
        mensaje += vehiculo + "\n"
    }
    alert(mensaje)
```
Estos codigos nos mostraran un alert con el array que hemos creado


#### Citas Coloreadas

[Tabla de contenidos](#tabla-de-contenidos)

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
