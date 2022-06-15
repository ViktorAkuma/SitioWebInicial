function PreguntarNombreYApellido(){
    var nombre=prompt("Ingresa tu nombre:");
    var apellido=prompt("Ingresa tu apellido:");
    alert(`Hola tu nombre es ${nombre} y tu apellido es ${apellido}`)
}
function ponerEnMayusculas(){
    var datosPersonales=document.getElementById("datos");
    datosPersonales.innerHTML="DATOS PERSONALES";
    datosPersonales.style.background="orange";
}