const person = {
    nombre: "Diego Antonio",
    apellido: "Angel Rodriguez",
    edad: 22,
    direccion: {
        ciudad: "GDL",
        cp: 44995,
        lat: 12.2323,
        ing: 35.6565
    }
}
const person2 = {...person};
person2.nombre = "Peter";

console.log(person);
//console.log({person});
//console.table(person);

console.log(person2);
