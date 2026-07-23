const prompt = require('prompt-sync')();


let a = Number(prompt("Ingresa tres números. Número 1: "));
let b = Number(prompt("Número 2: "));
let c = Number(prompt("Número 3: "));

//3 números por prompt y guardarlos en sus respectivas variables
let numeros = [a, b, c];

console.log("Estos son los números que metiste " + numeros);


// Sort compara los valores de las posiciones del arreglo y ordena aquí de menor a mayor
let ordenMenorMayor = [a, b, c].sort((a, b) => a - b);

//console.log(ordenMenorMayor);
console.log("Los número ordenados de menor a mayor son: " + ordenMenorMayor);

// Sort compara los valores de las posiciones del arreglo y ordena aquí de mayor a menor
let ordenMayorMenor = [a, b, c].sort((a, b) => b - a);
//console.log(ordenMayorMenor);
console.log("Los número ordenados de mayor a menor son: " + ordenMayorMenor);

// Comprar si hay numeros iguales
if (a === b){
    console.log("El primer número: " + a + " y "+ "el segundo número: " + b + " son iguales");
}else if(a === c){
    console.log( "El primer número: " + a + " y" + "el tercer número: " + c + " son iguales");
}else if(b === c){
    console.log ("el segundo número: " + b + " y" + "el tercer número: " + c + " son iguales")
}
