//Desestructuración de arrays
const personajes = ["Superman", "Batman", "Spiderman"];
const [e1] = personajes;
const [ , e2] = personajes;
const [ , , e3] = personajes;
console.log(e1);
console.log(e2);
console.log(e3);

const retornaArreglo = () => ["ABC", 123];
const [letras, numeros] = retornaArreglo();
console.log(`Letras: ${letras} - Numeros: ${numeros}`);