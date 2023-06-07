function showAlert() { alert("¡Hola, esta es una alerta desde JavaScript!"); }

console.log("Sale lolcito?")

let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
    alert("¡Haz hecho click en el botón");
});


document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

