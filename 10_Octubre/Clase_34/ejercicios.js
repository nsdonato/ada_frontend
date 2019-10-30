// 1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
const nombre = prompt("Por favor ingresa tu nombre")
alert(`¡Hola ${nombre} 😀!`);

// 2. Mostrarle los productos en promoción (2 productos)
alert(`Estos son los productos en promoción: 
🍔 + 🍺 -> Cuarto de Libra + 1 chopp: $ 100
🍕 + 🍺 -> Una porción de pizza + 1 chopp: $ 80
`);

// 3. Preguntarle si quiere comprar el producto 1.
//    a. Si responde "SI" preguntar cuántas unidades va a llevar
const cantProd1 = prompt(`¿Queres comprar el producto 1? Responde: SI o NO`) == "SI" && prompt(`¿Cuantas unidades vas a llevar?`);

// 4. Preguntarle si quiere comprar el producto 2.
//   a. Si responde "SI" preguntar cuántas unidades va a llevar
const cantProd2 = prompt(`¿Queres comprar el producto 2? Responde: SI o NO`) == "SI" && prompt(`¿Cuantas unidades vas a llevar?`);

const subtotalProd1 = (100 * cantProd1);
const subtotalProd2 = (80 * cantProd2);
let subTotal = subtotalProd1 + subtotalProd2;

// 5. Mostrar el detalle de la compra con:
// - subtotales de cada producto (precio x cantidad) 
// - total (suma de subtotales)
let detalleDeCompra = `Detalle de compra: 
- Subtotales de producto 1: $ ${subtotalProd1}
- Subtotales de producto 2: $ ${subtotalProd2}
- Total: $ ${subTotal}
`;

alert(detalleDeCompra);

// 6. Preguntar si desea abonar con tarjeta de crédito
// a. Si responde "SI" preguntar en cuántas cuotas desea abonar  
const abonaTarjeta = prompt(`¿Queres abonar con tarjeta de crédito? Responde: SI o NO`) == "SI" 
const cantCuotas = abonaTarjeta && Number(prompt(`¿En cuantas cuotas queres abonar?`));

// 7. Mostrar el detalle de la compra con:
// - subtotales de cada producto (precio x cantidad) 
// - total (suma de subtotales)
// - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
let montoCuota = abonaTarjeta && cantCuotas > 0 && (subTotal / cantCuotas);

let detalleConTarjeta = (cantCuotas > 0 && `- Pago con tarjeta en ${cantCuotas} cuotas. 
- Monto de cada cuota: $ ${montoCuota}`);

alert(detalleDeCompra + (abonaTarjeta && detalleConTarjeta));

// 8. Preguntar si tiene un código de descuento
// - si la respuesta es "SÍ", pedir que ingrese el código
// - mostrar si el código ingresado es correcto o incorrecto
const tieneCodigoDesc = prompt(`¿Tenes un código de descuento? Responde: SI o NO `) == "SI";
const codDescuento = prompt(`Por favor ingresar el código de descuento. Ingresar: DESC`);

const codigoCorrecto = codDescuento == "DESC";

codDescuento == "DESC" && alert("El código es correcto") && codDescuento != "DESC" && alert("El código es correcto");

// 9. Mostrar el detalle de la compra con:
// - subtotales de cada producto (precio x cantidad) 
// - total (suma de subtotales)
// - si tiene código y lo ingresó bien, mostrar el descuento y el total final
// - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
let total = subTotal - (10 * subTotal / 100);
montoCuota = abonaTarjeta && cantCuotas > 0 && (total / cantCuotas);
debugger;
detalleConTarjeta = (cantCuotas > 0 && `- Pago con tarjeta en ${cantCuotas} cuotas. 
- Monto de cada cuota: $ ${montoCuota}`);

const detalleConDescuento = `- Descuento de 10%. 
- Total de la compra: $ ${total}`

const detalleFinal = 
     (detalleDeCompra + 
     (tieneCodigoDesc && codigoCorrecto && ` ${detalleDeCompra} ${detalleConDescuento}`) && 
     (abonaTarjeta) + ` ${detalleDeCompra} ${detalleConDescuento} ${detalleConTarjeta} `); 

alert(detalleFinal);

// 10. Mostrar un saludo de despedida
alert(`Muchas gracias por su compra ${nombre}. Vuelva prontos`);