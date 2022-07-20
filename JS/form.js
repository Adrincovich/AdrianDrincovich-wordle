window.onload = function() {
    const form = document.getElementById("formulario-contacto");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const text = document.getElementById("comentario")

    form.addEventListener("submit", function(e){
        e.preventDefault();
        window.open('mailto:test@example.com?subject=subject&body=body');
    })

}