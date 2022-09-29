let edad= Number(prompt("Introduce tu edad"));
if (edad>=18)
{
    alert("Acceso concedido")
}
else 
{
    alert("Usted está ingresando bajo su responsabilidad")
}

var popup = document.querySelector(".popup");
popup.onclick = function(e){
    confirm("¿Seguro quiere cerrar su sesion?");
}




