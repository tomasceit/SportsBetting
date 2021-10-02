const signUp = () => {
    // Creo el nuevo usuario
    let username = (document.getElementById('userName')).value;
    let name = (document.getElementById('first_name')).value;
    let lastName = (document.getElementById('last_name')).value;
    let password = (document.getElementById('password')).value;
    let newUser = new User(username, name, lastName, password);

    // Lo guardo en el local storage
    let item = localStorage.getItem("userList");
    if (item) {
        let almacenados = JSON.parse(item);
        let found = almacenados.find((element) => (element.username).toLowerCase() === (newUser.username).toLowerCase())
        if (found === undefined) {
            almacenados.push(newUser);
            let almacenados_string = JSON.stringify(almacenados);
            localStorage.setItem("userList", almacenados_string);
            closeModal('#signUpModal', '#confirmationModal')
        } else {
            closeModal('#signUpModal', '#errorModal')
        }
    } else {
        let almacenados = [];
        almacenados.push(newUser);
        let almacenados_string = JSON.stringify(almacenados);
        localStorage.setItem("userList", almacenados_string);
        closeModal('#signUpModal', '#confirmationModal')
    }
}

function closeModal(modalClose, modalOpen) {
    $(modalClose).modal('hide');
    modalOpen !== undefined && $(modalOpen).modal('show');
}

const logIn = () => {
    if (!localStorage.getItem("userList")) {
        console.error('No hay usuarios todavia, ¡registrate!')
        return
    }
    let almacenados = JSON.parse(localStorage.getItem("userList"));
    let user = (document.getElementById('txtCorreo')).value;
    let pass = (document.getElementById('txtContraseña')).value;
    let signForm = document.getElementById('userlogin')
    let found = almacenados.find((element) =>
        ((element.username).toLowerCase() === user.toLowerCase()) && (element.password === pass))
    found !== undefined
        ? signForm.innerHTML = (`<button type="button" class="btn btn-green ml-3 mr-3"><a>Bienvenido, ${found.name} ${found.lastName}!</a></button>`)
        : console.error(`El usuario o contraseña son incorrectos`);
    $('#signInModal').modal('hide')
}