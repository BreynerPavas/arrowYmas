window.onload = () => {
    //Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
let result = (numeros.reduce((a,b) => a*b));
console.log(result);

// Salida--> 483600

}