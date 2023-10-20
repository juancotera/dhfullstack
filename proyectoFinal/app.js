const autosImportados = require('./autos')

const concesionaria = {
    /* completar */
   autos: autosImportados,
   buscarAuto : function(patente){
    let devuelve = this.autos.filter(function(e){
      return patente == e.patente
    });
    if(devuelve.length == 0){
      return null
    }else{
      return devuelve[0]
    }
   }
};