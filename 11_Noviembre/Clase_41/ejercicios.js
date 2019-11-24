/*
let saludo = "Hola";
let nombre = "Noe";

alert(saludo.length); //4

alert(saludo.concat(nombre)); // se concatena y retorna el string concatenado, no modificala variable principal
let a = saludo.concat(nombre);
alert(a);
alert(saludo);


alert(nombre.toLowerCase());
alert(nombre.toUpperCase());

let primeraLetra = nombre.charAt(0);
alert(`Primera letra: ${primeraLetra}`);0

012 -> length 3 - 1 : 2
noe
let ultimaLetra = nombre.charAt(nombre.length -1);
alert(ultimaLetra); //e

let dondeEmpiezo = 1;
let dondeTermino = nombre.length;
alert(nombre.charAt(0).toUpperCase() + nombre.slice(dondeEmpiezo, dondeTermino));

let testTrim = " hola como estas ";
alert(testTrim.trim()); // sin espacios adelante y atras.

Resto de metodos, en el link que dejo male.

Array:

let estoEsUnArray = ["Pieri", "Tefi", "Lili", "Gabu"];
                    //pos 0, pos 1 , pos 2 , pos 3

let item = estoEsUnArray[3];
alert(item);

----------------------------------------------------------------
Ejercicio MSN:
----------------------------------------------------------------
let nombre = prompt("Indique su texto para msn");
//let nombre = "empenetriz ha iniciado sesión";
let nombreMsn = "";

for (let i = 0; i < nombre.length; i++) {

    if(i % 2 === 0) {
        nombreMsn += nombre[i].toLowerCase();
    }else{
        nombreMsn += nombre[i].toUpperCase();
    }
}

console.log(`....${nombreMsn}.....`);
----------------------------------------------------------------

let estoEsUnArray = ["Pieri", "Tefi", "Lili", "Gabu"];
console.table(estoEsUnArray);

EJERCICIOS______________________________________________________

console.log(`Ejercicio 38:
Declarar una variable nombre con tu nombre como valor
Mostrar en consola la cantidad de letras que tiene tu nombre: noelia`);
let nombre = "noelia";
console.log(nombre.length);

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 39:
Declarar una variable nombre con tu nombre como valor
Declarar una variable apellido con tu apellido como valor
Mostrar en consola el siguientes mensajes:
Mi nombre es nombre y tiene nombre.length letras
Mi nombre es apellido y tiene apellido.length letras
Utilizar console.log() para cada mensaje
Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido`);
let nombre = "noelia";
let apellido = "donato";
console.log(`Mi nombre es: ${nombre} y tiene ${nombre.length} letras`);
console.log(`Mi apellido es: ${apellido} y tiene ${apellido.length} letras`);

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 40:
Declarar la variable texto con el siguiente valor: Usando el método
Declarar la variable metodo con el siguiente valor: concat
Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat`);

--------------------------------------------------------------------------------------------------------

let texto = "Usando el método ";
let metodo = "concat";
console.log(texto.concat(metodo));

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 41:
Declarar la variable texto y asignar el siguiente valor: HOLA MUNDO
Mostrar en consola el contenido de la variable texto en minúscula`);
let texto = "HOLA MUNDO";
console.log(texto.toLowerCase());

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 42:
Declarar la variable texto y asignar el siguiente valor: hola mundo
Mostrar en consola el contenido de la variable texto en mayúscula`);
let texto = "hola mundo";
console.log(texto.toUpperCase());

--------------------------------------------------------------------------------------------------------
console.log(`Ejercicio 43:
Declarar una variable texto con el siguiente valor: the dark knight
Declarar 3 variables en una línea con los siguientes nombres:
primerLetra
segundaLetra
tercerLetra
Asignar a la variable primerLetra el primer caracter del contenido de la variable texto
Asignar a la variable segundaLetra el caracter número 4 del contenido de la variable texto
Asignar a la variable tercerLetra el caracter número 9 del contenido de la variable texto
Declarar una variable resultado con el valor de concatenar las variables primerLetra, segundaLetra y tercerLetra
Mostrar en consola el contenido de la variable resultado en mayúscula
Deberías ver TDK como resultado`);
let texto = "the dark knight";
let primerLetra, segundaLetra, tercerLetra;
primerLetra = texto.charAt(0);
segundaLetra = texto.slice(4, 5);
tercerLetra = texto.slice(9, 10);
let resultado = primerLetra + segundaLetra + tercerLetra;
console.log(resultado.toUpperCase());

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 44:
Declarar la variable texto y asignar el siguiente valor: HOLA
Declarar la variable resultado y asignar el valor de la variable texto invirtiendo cada uno de los caracteres y concatenandolos
Mostrar en consola el contenido de la variable resultado en minúscula
Deberías ver como resultado la palabra aloh`);
debugger;
let texto = "HOLA";
let cadena = "";

for (let i = texto.length -1; i >= 0 ; i--) {
    cadena += texto[i];
}

console.log(cadena.toLowerCase());

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 45:
Declarar la variable mensaje y establecer el siguiente valor: 'Ada Lovelace fue la ayudante de Charles Babbage.'
Declarar la variable programadora
Utilizar el método slice para obtener el nombre Ada Lovelace del texto en la variable mensaje y asignarlo a la variable programadora
Utilizar la variable programadora y la concatenación de textos para mostrar en consola el siguiente mensaje: "¡Ada Lovelace la primer programadora de la historia!`);
let mensaje = "Ada Lovelace fue la ayudante de Charles Babbage.";
let programadora = mensaje.slice(0,"Ada Lovelace".length);
console.log(`¡${programadora} la primer programadora de la historia!`);

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 46:
Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'ada2019,12345'
Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (ada2019)
Declarar la variable password y utilizar el método substr para obtener el password (12345)
Mostrar en consola el siguiente mensaje: El usuario $ {nombreDeUsuario} tiene $ {password} como password`);
let usuarioYPassword = 'ada2019,12345';
let nombreDeUsuario = usuarioYPassword.substr(0,"ada2019".length);
let password = usuarioYPassword.substr("ada2019".length+1,"12345".length);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como password`);

--------------------------------------------------------------------------------------------------------

console.log(`Ejercicio 48:
Declarar la variable piString y guardar el valor 3.14 como String
Declarar la variable constanteString y guardar el valor 42 como String
Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
Mostrar en consola el contenido de la variable resultado
Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.`);

let piString = "3.14";
let constanteString = "42";
let pi = Number(piString);
let constante = Number(constanteString);
let resultado = pi + constante;
console.log(resultado);
console.log(`${resultado} es el resultado de sumar las variables ${pi} y ${constante}`);

*/