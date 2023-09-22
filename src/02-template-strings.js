console.log("Hola mundo");

const name = "Diego Antonio";
const lastName = "Angel Rodriguez";

let valorDado = 5

if (true) {
    let valorDado = 6;
    console.log(valorDado);
}
console.log(name, lastName, valorDado);

const nombreCompleto1 = name + " " + lastName;
const nombreCompleto2 = `Hola 

Mundo`
const nombreCompleto3 = `\nEste es un template string: ${name} ${lastName}`;
const nombreCompleto4 = `
${name}
${lastName}
${1 + 1}`;
function wave() {
    return "Hola mundo";
}
function wavePerson(name){
    return `\nHola ${name}`;
}

console.log(nombreCompleto1);
console.log(nombreCompleto2);
console.log(nombreCompleto3);
console.log(nombreCompleto4);
console.log(`He llamado a una función!
${wave()}`)
console.log(wavePerson("Diego"))