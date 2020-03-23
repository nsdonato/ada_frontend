/* Info clase:

Respuestas a llamados HTTP:
404 -> no ecuentro el recurso que me estas pidiendo
200 -> salió todo bien

JSON:
    "Algo que se parece mucho a un obj de javascript y sirve para enviar información entre páginas web."
    - El nombre de su propiedad tiene que ir entre comillas.
    - La última propiedad no puede tener coma o punto.

Promesas:
    Es la garantia de que va a pasar algo en el futuro. Se pueden cumplir o romper.
    Es una función que recibe parametros
    resolve("mensaje optativo") (si todo sale bien)
    reject("mensaje optativo") (si sale mal)
    .then() -> su parametro es una función. basicamente es el mensaje que escribimos en el ej de resolve
    const promesa = new Promise((resolve, reject) => {
    if(nombre === "Leelee"){
        resolve("Si, el nombre es Leelee");
    }else{
        reject("No, el nombre no es Leelee")
    }
    })

    console.log(promesa);

    promesa.then(mensaje => { -> solo se va a ejecutar una vez que la promesa se resuelva para bien.
        console.log(mensaje)
    }).catch(mensajeError => {
        console.log(mensajeError)
    })

FETCH:
    es un metodo del navegador. "anda y busca esto", recibo varios parametros, uno solo es obligatorio, la url desde donde quiero obtener la información.

    console.log(fetch('https://reqpres.in/api/users/2')); -> solo vemos una promesa, va a cambiar de estado cuando se resuelva.

    fetch('https://reqpres.in/api/users/2')
        .then(res => {
            console.log(res.body) //-> me retorna información sobre el fetch en si.
            // en body tenemos la información que este en ReadableStream, para eso tenemos que compartirla a json.
        })
        .then(data => console.log(data)) -> en esta promesa se resuelve el json
*/