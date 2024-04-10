 
  function validarFormulario(){
    
 nombre =document.getElementById("nombre").value
 apellidos=document.getElementById("apellidos").value
 telefono=document.getElementById("telefono").value
 correoelectronico=document.getElementById("correo").value
 mensaje =document.getElementById("mensaje").value
 mensajeError=document.getElementById("mensajeError")
  console.log (nombre+" "+apellidos+" "+telefono)
 var regexNombre=/^\w+\s*\w+$/;
 var regexApellidos=/^\w+\s\w+$/;
 var regexTelefono=/^\d{9}$/;
 var regexEmail=/^[\w\._-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
 

mensajeError.innerText="";
if(!regexNombre.test(nombre) ){
    
    mensajeError.innerText +="Escriba un nombre válido minimo 3 caracteres. ";
    return false;

} 

    


if(!regexApellidos.test(apellidos)){
    mensajeError.innerText +="Escriba un apellido válido";
    return false;
}
if(!regexTelefono.test(telefono)){
    mensajeError.innerText +="Escriba un teléfono válido";
    return false;
}

if(!regexEmail.test(correoelectronico)){
    mensajeError.innerText +="Escriba un correo válido ";
    return false;
}


  return true;

  }