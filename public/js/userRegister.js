console.log("userRegister.js connected!");

$("form-register").addEventListener("submit", function (e) {
    e.preventDefault();
    /* se aplicarán validaciones!!! */

    /* cuando las validaciones se cumplan, entonces envío el formulario */
    Swal.fire({
        position: "center",
        icon: "info",
        title: "Recibirás un email para confirmar tu registración",
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            this.submit();
        }
    });
});

$("btn-show-pass").addEventListener("click", ({ target }) => {
    if (target.localName === "i") {
        target.classList.toggle("fa-eye");
        $('pass').type = $('pass').type === 'text' ? 'password' : 'text'
    } else {
        target.childNodes[0].classList.toggle("fa-eye");
        $('pass').type = $('pass').type === 'text' ? 'password' : 'text'
    }
});
