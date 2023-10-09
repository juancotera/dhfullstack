//hamburguesas
let costo = 0;
let carne = 1800;
let pollo = 1500;
let vegetariana = 1200;

function callBack(tipo, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {

  if(jamon == true){costo = costo + 30;}
  if(queso == true){costo = costo + 25;}
  if(salsaDeTomate == true){costo = costo + 5;}
  if(mayonesa == true){costo = costo + 5;}
  if(mostaza == true){costo = costo + 5;}
  if(tomate == true){costo = costo + 15;}
  if(lechuga == true){costo = costo + 10;}
  if(cebolla == true){costo = costo + 10;}

  if(tipo == "carne"){
    return costo = costo + carne;
  }else if(tipo == "pollo"){
    return costo = costo + pollo;
  }else if( tipo == "vegetariana"){
    return costo = costo + vegetariana;
  }else {
    return "Teienes que elegir una hamburguesa";
  }

}

function ticket(nombre, apellido, monto) {
  return 'Estimado ' + nombre + ' ' + apellido + ', el monto total a pagar es de: ' + monto;
}

console.log(ticket("Juan", "Cotera",callBack("carne", 0,1,1,1,1,0,1,0)))





