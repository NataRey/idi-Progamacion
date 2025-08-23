// if = si se cumple la condicion 
// entonces realice el proceso sino se cumple la primera promera condicion else = de lo contrario 
/**sintaxis
 * if(condicion){
 * proceso
 * }else if(condcion){
 * proceso}
 */
// let num = "5";
// if(num === 5)
//     {
//         alert("el numero es 5");
//     }else{
//         alert("el numero ingresado es " + num)
//     }
/* para poder ingresar a la pagina web la persona debe ingresa su edad con ayuda de una condicional de debe lo validar lo siguiente 

1. si tiene menos de 18 a es menor de edad 
2. si tiene 18 o mas es mayor de edad 

*/
function validarEdad(){
    const edad = document.getElementById('edad').value;


    if(edad>=18){
        alert("eres mayor de edad puedes ingresar");
    }else{
        alert("aun eres menor de edad y debes tener cedula para poder ingresar ")
    }
}

/*. Un alumno desea saber cual será su calificación final en cierta materia. Dicha calificación se compone de lo siguiente:

60% corresponde al examen escrito.
20% corresponde a las lecciones
15% corresponde a las tareas.
5% corresponde a las prácticas en el laboratorio

El dato del examen escrito es un valor entre 0 y 100 y los otros datos son valores entre 0 y 10. La calificación final debe ser un valor entre 0 y 20.*/

// let notaExamen= 85;
// let notaLeccion= 9;
// let notaTareas = 5;
// let notaPracticas =7;

// if(notaExamen <0 || notaExamen >100)
// {
//     alert("Ojo El dato del examen escrito es un valor entre 0 y 100")
// }else if(notaLeccion <0 || notaLeccion >10 || notaTareas<0 || notaTareas >10 || notaPracticas<0 || notaPracticas >10){
//     alert("los otros datos son valores entre 0 y 10")
// }else{
//     let leccionesConvertidas = (notaLeccion/10)*100;
//     let tareasConvertidas = 
//     (notaTareas/10)*100;
//     let practicasConvertidas = (notaPracticas/10)*100;

//     let calificacionPonderada = (notaExamen* 0.60)+(leccionesConvertidas * 0.20)+(tareasConvertidas *0.15)+(practicasConvertidas *0.05)

//     let conversionFinal = (calificacionPonderada/100)*20;

//     alert("la calificacion final de alumno es: " + conversionFinal);
//}

// switch case= es decir un ciclo donde valido los casos y si el caso esta valido entonces me dara una respuesta de lo contrario tomara un valor por defecto 
// sintaxis 
/**switch (expresion a evaluar){
 * case :
 * instruccion a ejecutar 
 * break;
 * default
 * }
 */

/*si la vocal es a escribe aguila
si la vocal es e escribe elefante 
si la vocal es i escribe iglesia
si la vocal es o escribe oso
si la vocal es u escribe uno*/
// let vocal = 5;
// switch (vocal){
//     case 2:
//         alert("aguila");
//         break;
//     case 3:
//         alert("elefante");
//         break;
//     case "i":
//         alert("iglesia");
//         break;
//     case "o":
//         alert("oso");
//         break;  
//     case "u":
//         alert("uno");
//         break;  
//     default:
//         alert("ingrese una vocal valida")

// }

//for es un bucle por medio cual controlamos algo 
/**sintaxis es
 * for(incialice una variable ; hasta que se cumpla la condicion; realice un incremento){
 * realizar un porceso}
 */

// imprime los numeros del 1 al 5 por consola con el ciclo for

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

let sumaPares = 0;
let sumaImpares = 0;

let arrayNumeros = [1,2,3,4,5];

for(let i=0; i<arrayNumeros.length;i++){
    let numeroActual = arrayNumeros[i];
    

    if(numeroActual % 2 === 0){
        sumaPares = sumaPares+numeroActual
    }else{
        sumaImpares = sumaImpares+numeroActual
    }
}

console.log("suma de los numero pares es: " ,sumaPares);
console.log("la suma de los impares es ",sumaImpares);


const letras = ['arbol', 'bota', 'casa', 'dado'];
const invertido = letras.reverse();
console.log(invertido); // ['d', 'c', 'b', 'a']











