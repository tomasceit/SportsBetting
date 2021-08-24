// Funciones
let userAge = undefined;
const checkAge = () => {
    userAge = Number(prompt('Ingrese su edad:'));
    let mayoriaEdad = true;
    if (userAge < 18) {
        mayoriaEdad = false;
    }
    return mayoriaEdad;
}