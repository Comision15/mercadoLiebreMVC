console.log('userRegister success!');

const exRegAlfa = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
const exRegPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}/



const msgError = (element, msg, {target}) => {
    $(element).innerText = msg;
    target.classList.add('is-invalid');
};

const cleanField = (element, target) => {
    $(element).innerText = null;
    target.classList.remove('is-invalid', 'is-valid')
};

const validField = (element,{target}) => {
    cleanField(element, target)
    target.classList.add('is-valid');
    
}

const viewPass = function(e) {
    console.log(e.target)
   document.querySelector('#viewPass i').classList.toggle('fa-eye')
   document.querySelector('#viewPass i').classList.toggle('fa-eye-slash')

   $('pass').type = $('pass').type === "text" ? 'password' : 'text'
}



$('name').addEventListener('blur', function(e){
    switch (true) {
        case !this.value.trim():
            msgError('errorNombre',"El nombre es obligatorio", e);
            break;
        case this.value.trim().length < 2 :
            msgError('errorNombre',"El nombre debe tener como mínimo dos caracteres", e);
            break
        case !exRegAlfa.test(this.value):
            msgError('errorNombre',"Solo se permiten caracteres alfabéticos", e);
            break
        default:
            validField('errorNombre',e)
            break;
    }
});

$('name').addEventListener('focus', function({target}){
    cleanField('errorNombre', target)
});


$('surname').addEventListener('blur', function(e){
    switch (true) {
        case !this.value.trim():
            msgError('errorApellido',"El apellido es obligatorio", e);
            break;
        case this.value.trim().length < 2 :
            msgError('errorApellido',"El apellido debe tener como mínimo dos caracteres", e);
            break
        case !exRegAlfa.test(this.value):
            msgError('errorApellido',"Solo se permiten caracteres alfabéticos", e);
            break
        default:
            validField('errorApellido',e)
            break;
    }
});

$('surname').addEventListener('focus', function({target}){
    cleanField('errorApellido', target)
});

$('email').addEventListener('blur', function(e){
    switch (true) {
        case !this.value.trim():
            msgError('errorEmail',"El email es obligatorio", e);
            break;
        case !exRegEmail.test(this.value):
            msgError('errorEmail',"El email tiene un formato inválido", e);
            break
        default:
            validField('errorEmail',e)
            break;
    }
});

$('email').addEventListener('focus', function({target}){
    cleanField('errorEmail', target)
});

$('pass').addEventListener('blur', function(e){
    switch (true) {
        case !this.value.trim():
            msgError('errorPass',"La contraseña es obligatoria", e);
            break;
        case !exRegPass.test(this.value):
            msgError('errorPass',"La contraseña debe tener entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial", e);
            break
        default:
            validField('errorPass',e)
            break;
    }
})

$('pass').addEventListener('focus', function({target}){
    cleanField('errorPass', target)
})