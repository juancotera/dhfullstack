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
   }
};

console.log(concesionaria.buscarAuto('APL123'))