let cursos = [["html5", 4000], ["css3", 5000], ["javascript", 10000], ["react",7000], ["nodejs", 15000]];
let pedido = ['HTML5', 'CSS3', 'JAVASCRIPT', 'NODEJS'];
//, 'REACT'

function costoTotal(cursosArray, pedidoArray){
  let pagar = 0
  let lista = 0
  for(let i = 0; i < cursosArray.length; i++){
    let toma = cursosArray[i][0].toUpperCase();
    if( pedidoArray.includes(toma) == true){
      let tomaPrecio = cursosArray[i][1];
      pagar += tomaPrecio;
      lista++;
      console.log(lista + '.- '+ toma)
    }else{
      // console.log('no lo tengo')
    }
  }
  console.log('El monto total a pagar es de: $' + pagar);
}

function datos(nombre, apellido){
  console.log('Estimado '+ nombre +' '+apellido+ ', en función de los cursos seleccionados:');
  costoTotal(cursos, pedido);
  console.log('Bienvenido a la gran aventura Digital House.');
}

datos('Juan', 'Cotera');