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
      biciEncontrada.vendida = true;
      return biciEncontrada;
    }
  },
  biciParaLaVenta : function(){

  }
}

console.log(dhBici.venderBici(6))