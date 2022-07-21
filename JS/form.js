window.onload = function() {
    const form = document.getElementById("formulario-contacto");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const text = document.getElementById("comentario")

    form.addEventListener("submit", function(e){
        e.preventDefault();
        window.open(`mailto:adrian.drincovich@gmail.com?subject=Consulta de ${name.value}&body=${text.value}`);
        form.reset();
    })

}