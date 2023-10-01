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
  return console.log('El monto toal de los depositos es de: $' + depositos + '\n'+
                    'El monto total de los retiros es de: $' + retiros + '\n'+
                    'Por lo tanto, su saldo actual en la es de: $' + (depositos - retiros)
  )
}

function datos(nombre, apellido){
  if(nombre == '' && apellido == ''){
    return console.log('Debe ingresar sus datos.')
  } else{
    return console.log('Estimad@ ' + nombre + ' ' + apellido);
  }
}

datos('Juan', 'Cotera');
callBack(operacionesArray);