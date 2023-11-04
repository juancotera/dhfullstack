//TABLA DE MULTIPLICAR USANDO FOR
function tablaDeMultiplicar() {
  let multiplicador = 1
  do{
    for(let i = 0; i < 11 ; i++){
     if(i == 11){
       i = i * 0;
     }else{
       console.log(multiplicador + ' * ' + i + ' = ' + multiplicador * i)
     }
    }
    multiplicador++
  } while(multiplicador < 11)
}

tablaDeMultiplicar();