function hi(nombre) {
    return `Hello ${nombre}`;
}
console.log(hi("Diego"));

const hiToo = (nombre) => `Hola ${nombre}`
console.log(hiToo("Antonio"));

// Arrow functions
const hiAgain = (nombre) => `Hey ${nombre}`;
console.log(hiAgain("Diego"));

const hiAnotherTime = (nombre) => `Hey, hola por cuarta vez ${nombre}`;
console.log(hiAnotherTime("Antonio"));

const getUser = () => ({id: 123456,
    userName: "Diego123",
});
const user = getUser();
console.log(user);

const getUserActivo = (nombre) => ({
    uid: "ABC123",
    userName: nombre
});
const usuarioActivo = getUserActivo("Antonio")
console.log(usuarioActivo);