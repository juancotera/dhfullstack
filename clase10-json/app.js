const bicis = require('./datosBici.js');

let dhBici = {
  bicicletas : bicis,
  buscarBici : function(id){
    let devuelve = this.bicicletas.filter(function(e){
      return id == e.id
    });
    if(devuelve.length == 0){
      return null
    }else{
      return devuelve[0]
    }
  },
  venderBici : function(id){
    let biciEncontrada = this.buscarBici(id)
    if(biciEncontrada == null){
      return 'La bici no se encontró';
    }else{
      biciEncontrada.vendida = true; //le otorgamos el valor a true si esta es false, por que es como una variable
      return biciEncontrada;
    }
  },
  biciParaLaVenta : function(){
    biciSinVender = bicis.filter((libre) => libre.Vendida == false);
    if(biciSinVender.length < 0){
      return 'Todas las bicis fueron vendidas';
    }else {
      return biciSinVender;
    }
  },
  totalDeVentas : function(){
    bicisVendidas = bicis.filter((libre) => libre.Vendida == true);
    return bicisVendidas
  }
}

console.log(dhBici.totalDeVentas())