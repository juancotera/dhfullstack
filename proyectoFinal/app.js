const autosImportados = require('./autos')

const concesionaria = {
    /* completar */
   autos: autosImportados,
   buscarAuto : function(patente){
    for (const auto of this.autos) {
      if (auto.patente === patente) {
        return auto; // Devuelve el objeto completo si se encuentra
      }
    }
    return null; // Devuelve null si no se encuentra
   },
   venderAuto : function(patente){
    let autoEncontrado = this.buscarAuto(patente);
    if(autoEncontrado){
      autoEncontrado.vendido = true;
      return autoEncontrado;
    }
   },
  autosParaLaVenta : function() {

  }
};

console.log(concesionaria.venderAuto('APL123'))