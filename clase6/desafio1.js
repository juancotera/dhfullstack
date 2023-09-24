let electrodomesticos = ["licuadora", "horno", "freidora", "microonda", "batidora", "hervidora"];

//MOSTRAR ALEATOREO
//const numeroAleatorio = Math.floor(Math.random() * electrodomesticos.length);
//console.log(electrodomesticos[numeroAleatorio]);

//EXTRA EL PRIMERO Y PONERLO AL FINAL
// let extraido = electrodomesticos.shift();
// let colocar = electrodomesticos.push(extraido);
// console.log(electrodomesticos);

//AGREGAR DOS PRODUCTOS AL FINAL
// let agregar = electrodomesticos.push("extractora", "olla arrocera")
// console.log(electrodomesticos);

//MOSTRAR CUANDO ELEMENTOS EXISTE
// console.log(electrodomesticos.length)

//BUSCAR EL PRODUCTO Y RESPONDER
// let buscar = electrodomesticos.indexOf("guaflera");
// if( buscar != -1){
//   console.log('Producto encontrado');
// } else {
//   console.log('El producto buscado no existe')
// }

//UNIFICAR TODOS LOS ELEMENTOS
//let unificar = electrodomesticos.join(' ');
// let medir = unificar.length;
// console.log(unificar + ' ' + medir);

//CAMBIAR EL NOMBRE DE UN PRODUCTO DENTRO
//activar arriva por que replace usa a los string, más no a los array
// let cambiar = unificar.replace("horno", "wafflera");
// console.log(cambiar);

//DEVOLBER UN ARRAY
let unificar = electrodomesticos.join(',');
console.log(unificar);
let cambiar = unificar.replace("horno", "wafflera");
console.log(cambiar);
let devolverArray = cambiar.split(',')
console.log(devolverArray)