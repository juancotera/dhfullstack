function minuscula(a){
  return a.toUpperCase();
}

function tipoDe(a){
  return typeof(a);
}

function añoPerruno(a){
  return a * 7;
}

function horaDeTrabajo(a,b,c){
  let calculoDia = a / b;
  let calculoHora = calculoDia / c;
  return calculoHora;
}

console.log(minuscula("juan"));
console.log(tipoDe("juan"));
console.log(añoPerruno(3));
console.log(horaDeTrabajo(750, 20, 8));
