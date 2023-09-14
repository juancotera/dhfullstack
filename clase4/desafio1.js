let perfil = "administrador";

if (perfil == "administrador") {
  console.log("Usted tiene todo los privilegios de uso de sistema");
}else if (perfil == "asistente") {
  console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");
}else if( perfil == "invitado") {
  console.log("Usted sólo tiene permisos de cosnultar datos");
}else{
  console.log("Debe especificar un perfil");
}