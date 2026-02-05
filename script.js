const form = document.querySelector(".formulario")
const mascarar = document.querySelector(".mascaramento")

function formulario(){
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascarar.style.visibility = "visible"
}
function esconder(){
    mascarar.style.visibility = "hidden"
    form.style.left = "-240px"
    form.style.transform = "translatex(0%)"
}