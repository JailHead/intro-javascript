// Arrays en javascript
//const arreglo = new Array("uno","dos","tres","cuatro");
// const array = [];
const arreglo = [1,2,3,4,5];

// Agregar elementos a un array
const arreglo2 = [...arreglo, 6];
console.log(arreglo);
console.log(arreglo2);

// función map
const arreglo3 = arreglo2.map((numero) => numero*2);
console.log(arreglo3)