/**Operadores de asignacion*/
let edad = 25;
/**por debajo lee e la siguiente forma: 
 * variable  se llama edad y es igual a un number que es 25
*/
let nombre = "pepito";
/**por debajo lee e la siguiente forma: 
 * variable  se llama nombre y es igual a un string que es pepito
*/
let esmujer = false;
/**por debajo lee e la siguiente forma: 
 * variable  se llama esmujer y es igual a un boolean que es false
*/

console.log(edad);
console.log("hola, ", nombre , " como estas");
console.log("hola con suma " + nombre + " como estas");
console.log(`hola con backticks ${nombre} como estas`);
//alert(`hola con backticks ${nombre} como estas`)// se muestra en pantalla 
console.log(esmujer);

/** Operadores Aritmeticos */
/**suma, resta, multiplicacion, division, modulo incremento decremento*/

/*suma + */
let resultado = 10+5;
console.log(resultado);

/*resta -*/
let resta = 15-6;
console.log(resta);

/**multiplicacion * */
let multi = 9*84;
console.log(multi);

/**division / */
let division = 9/3;
console.log(division);

/**modulo % */
let modulo = 10%3;
console.log(modulo);

/**incremento ++ */
let incremento = 5; incremento++;
console.log(incremento);

/**decremento -- */
let decremento = 10; decremento--;
console.log(decremento);

/**Operadores de comparacion (es igual? == o es mas grande? >= o es mas pequeno <= es exactamente igual === ? estrictamente diferente !==  solo diferente sin validar su tipo !=) */

let tarj1 = 5;//number 5
let tarj2 = "5"; // string  5
let sonIguales = tarj1 == tarj2;
console.log(sonIguales);
let sonIguales1 = tarj1 === tarj2;
console.log(sonIguales1);

console.log(10!=="10");

/**Operadores Logicos (Y &&, O ||, NO LOGICO ! )*/
console.log(true && false); // si alguna de las dos afirmaciones es falsa el resultado es false
console.log(true && true); // si  las dos afirmaciones son verdaderas el resultado es true

console.log(true || false);// si alguna de las dos afirmaciones es verdadera sera siemre verdadera 

console.log(false || false);// solo da flaso cuando las dos afirmaciones son falsas

console.log(!false);// estoy diciendo que esta afirmacion no es falsa la respuesta entonces es verdadera por que este simbolo invierte el valor 

/**Operador de concatenacion + , ` */
let saludo = "Hola " + "mundo";
console.log(saludo);









