let operacionesArray = [-20, 200, 100, -50];//depositos + / retiors -

function callBack(operaciones){
  let depositos = 0
  let retiros = 0
  for(let i = 0; i <= operaciones.length; i++){
    let dinero = operaciones[i];

    if (dinero < 0){
      dinero = dinero * -1;
      retiros = retiros + dinero;
    }
    if (dinero > 0){
      depositos = depositos + dinero;
    }
  }
  let saldoTotal = depositos - retiros
  return console.log('El monto total de los depositos es de: $' + depositos + '\n'+
                    'El monto total de los retiros es de: $' + retiros + '\n'+
                    'Por lo tanto, su saldo actual en la es de: $' + (saldoTotal)
  )
}

function datos(nombre, apellido){
  if(nombre == '' && apellido == ''){
    return console.log('Debe ingresar sus datos Usuario Anonimo.')
  } else{
    return console.log('Estimad@ ' + nombre + ' ' + apellido);
  }
}

datos('Juan', 'Cotera');
callBack(operacionesArray);