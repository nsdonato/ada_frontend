/*
----- EJERCICIO 34
Declarar 3 variables con los siguientes nombres: ingresos, ganancias, impuestos
Asignar los siguientes valores a cada variable según corresponda:
ingresos: asignar el valor 1000
ganancias: asignar el valor 600
impuestos: asignar el valor 500
Este mes se esperan los siguientes objetivos:
Generar al menos 800 pesos o más de ingreso
Gastar menos de 400 pesos de impuestos
Se Paga bono si se ganan 600 pesos de ganancias justo
Mostrar en consola los siguientes mensajes utilizando los operadores esperados:
Objetivo de ingresos: true o false
Utilizar el operador mayor o igual que
Objetivo de impuestos: true o false
Utilizar el operador menor que
Bono de ganancias: true o false
Utilizar el operador de q simple*/
let ingresos = 1000;
let ganancias = 600;
let impuestos = 500;
console.log(ingresos >= 800);
console.log(impuestos < 400);
console.log(ganancias === 600);
/*
----- EJERCICIO 36
Declarar las siguientes variables numero1 y numero2
Asignar a numero1 el valor 10
Asignar a numero2 el valor 20
Mostrar en consola los siguientes mensajes:
La variable numero1 y numero2 tienen el mismo valor: true/false
La variables numero1 y numero2 son distintas: true/false
*/
let numero1 = 10;
let numero2 = 20;
console.log(`La variable ${numero1} y ${numero2} tienen el mismo valor: ` + (numero1 === numero2));
console.log(`La variable ${numero1} y ${numero2} son distintas: ` + (numero1 !== numero2));
/*
----- EJERCICIO 37
Declarar las variables promedioParaAprobar y promedioDelAlumno
Asignar a promedioParaAprobar el valor 6
Asignar a promedioDelAlumno el valor 4
Mostrar en consola los siguientes mensajes:
El alumno tiene un promedio mayor o igual que el requerido: true/false
Al alumno le faltaron ${puntos} para aprobar
*/
let promedioParaAprobar = 6;
let promedioDelAlumno = 4;
console.log(`El alumno tiene un promedio mayor o igual que el requerido: ` + (promedioDelAlumno >= promedioParaAprobar));
let puntos = promedioParaAprobar - promedioDelAlumno;
console.log(`Al alumno le faltaron ${puntos} puntos para aprobar`);
