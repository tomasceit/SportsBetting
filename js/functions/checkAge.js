// Chequear que sea mayor de edad
let userAge = undefined;

const checkAge = () => {
    userAge = Number(prompt('Ingrese su edad:'));
    let mayoriaEdad = false;
    userAge<18 ? mayoriaEdad = false : mayoriaEdad=true;
    return mayoriaEdad;
}