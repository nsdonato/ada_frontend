/* La etiqueta de script en el HTML, siempre al final del body.
- La compu guarda en su memoria fisica el valor de las variables.
- variables definidas con camelCase (basicamente arranca en minuscula al cambiar de palabra, la primera es mayus.)
        Las clases van con pascal: CamelCase
        ALL_CAPS o UPPER_SNAKE_CASE: idelamente, las constantes. 
        solo_minus: Generalmente base de datos

- Porque no usamos mas var (hoisting):
    * HOISTING: 
        Javascript se lee de arriba para abajo. No se puede hacer esto, da error "no esta definida":
        
            console.log(declarada);
            let declarada;
            // si usamos var, da undefined...!!!!
            * Cuando usamos la palabra var, javascript lee el archivo rapidamente y declara todas las variables con var, por eso aparece como undefined, esto hace el HOISTING.
            "uno" + "dos" = uno + dos. 
            El + permite concatenar strings.
    * COHERSION: 
        console.log(2 + "2"); 22. convierte el primer parametro al tipo del segundo para que tenga sentido la solución 
        console.log("2" - 2); 0 CERO NOS DA. dios
        dividir por 0, es igual a INFINITY.
        - COHERSION EXPLICITA:
            Metodos de cohersión:
            console.log(String(3)); "3"
            console.log(Number("32")); 32;
            console.log(Boolean(true)); 1;

    * Cuando la variable no esta DECLARADA, va a dar un error de que "no esta definida".
        console.log(variableSinDeclarar);
    * Cuando la variable esta declarada PERO NO DEFINIDA, va a dar undefined.
        let declarada;
        console.log(declarada);
    * var se puede usar, pero no debemos, trae problemas.
    * Otros datos primitivos: infinity, nan (numeros con los que no se puede operar)
    * typeof number, typeof string, typeof boolean, typeof undefined, type null (object), type nan (number)
    * let nombreProfe = 'Hola Malena"';
    * let nombreProfe = "Hola 'Malena'";
    * let nombreProfe = `Hola 'Malena`;
    * let nombre = `El nombre de la profesora es ${nombreProfe}`;
    * Lo siguiente hace que se pueda utilizar el salto de linea sin poner un \n
    * let frase = `El nombre de la profesora 
    
      es ${nombreProfe}`;

    https://wtfjs.com/
    
    /------------------- TAREA ---------------------/
    - Crear un html y un js, linkearlos correctamente.
    - En el documento js vamos a :
        1. Declarar la variable saludo y asignarle el valor "Hola, chicas". Mostrarla en consola.
        2. Mostrar el siguiente mensaje en consola sin asignarlo a una variable: "Soy un string sin variable".
        3. Declarar una variable nombre con tu nombre. Declarar una variable bienvenida con el texto bienvenida.
        Mostrar en la consola el mensaje completo {"Hola Ana}";
        4. Declarar una variable con el valor Jay's. Declarar una variable con el valor "es el "mejor" local".
        Mostrar en la consola "Jay's es el "mejor" local";
        5. Declarar una variable primerTexto con el valor: este texto tiene "comillas dobles".
        Declarar una variable segundoTexto con el valor: este texto tiene 'comillas simples'.
        Mostrar en consla ambos valores. 
    /-----------------------------------------------/
*/

console.log("Punto 1: ");
const saludo = "Hola, chicas";
console.log(saludo);
console.log("----------------------------------");
console.log("Punto 2: ");
console.log("Soy un string sin variable");
console.log("----------------------------------");
console.log("Punto 3: ");
const miNombre = "Noe";
const bienivenida = "bienvenida";
console.log(`Hola ${miNombre} ${bienivenida}`);
console.log("----------------------------------");
console.log("Punto 4: ");
const nombre = "Jay's";
const resenia = 'es el "mejor" local';
console.log(`${nombre} ${resenia}`);
console.log("----------------------------------");
console.log("Punto 5: ");
const primerTexto = 'este texto tiene "comillas dobles"';
const segundoTexto = "este texto tiene 'comillas simples'";
console.log(primerTexto);
console.log(segundoTexto);
console.log("----------------------------------");