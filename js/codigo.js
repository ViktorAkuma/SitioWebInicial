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
function cargarAyuda(control){
    var h3=document.getElementById(h3ayuda);
    if (control.name=="txtNombre")
        var mensaje="Ingrese con mayuscula su nombre"
    if (control.name=="txtApellido")
        var mensaje="Ingrese con mayuscula su apellido"
    if
    
}   

function cargarAyudaNombre(control){
    let ayudas={"txtNombre":"Ingrese con mayúsculas su nombre",
                "txtApellido":"Ingrese con mayúsculas su apellido",
            "chkCasado":"Situación civil"};    
        var h3=document.getElementById("h3ayuda");
        h3.innerHTML="Ingrese con mayúsculas su nombre";
    
        h3.innerHTML=ayudas[control.name];
    }
    function cargarAyudaApellido(){
        var h3=document.getElementById("h3ayuda");
        h3.innerHTML="Ingrese con mayúsculas su apellido";
    }
    function AgregarFila(){
        var tabla=document.getElementById("tabla");
        var nuevaFila='<tr><td>Ramirez</td><td>Rubén Alejandro</td><td>19</td><td>07</td><td>1976</td><td >Fco Romero 1823</td></tr>';
        tabla.innerHTML=tabla.innerHTML+nuevaFila;
    }
    function cargarAyudaEstadoCivil(){
        var h3=document.getElementById("h3ayuda");
        h3=innerHTML="Presione el cuadro para seleccionar o deseleccionar"
    }
    function cargarAyudaNombre(){
        var h3=document.getElementById
    }