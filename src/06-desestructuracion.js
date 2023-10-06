//Desestructuración
const persona = {
    nombre: "Diego",
    edad: 22,
    clave: "Diego123"
}

//const {nombre, edad} = persona;
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const {nombre, edad, clave} = persona;
console.log(`\n${nombre}`);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad}) => `\nHola ${nombre} de edad ${edad}`;
console.log(retornaPersona(persona));

const retornaPersona2 = ({nombre, edad, clave}) => {
    return {
        nombreClave: clave,
        años: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const {nombreClave, años, latlng: {lat, lng}} = retornaPersona2(persona);
console.log(nombreClave, años);
console.log(lat, lng);