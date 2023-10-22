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
    let autoSinVender = this.autos.filter((auto) => auto.vendido == false);
    if(autoSinVender.length < 0){
      return 'Todas las bicis fueron vendidas';
    }else {
      return autoSinVender;
    }
  },
  autosNuevos : function(){
    let autosNoVendidos = this.autosParaLaVenta();
    const autosFiltrados = autosNoVendidos.filter((objeto) => {
      return objeto.km <= 100
    });
    return autosFiltrados
  },
  listaDeVentas : function(){
    const listaPrecios = this.autos
    .filter((auto) => auto.vendido == true)
    .map((auto) => auto.precio);
    return listaPrecios;
  }
};

console.log(concesionaria.listaDeVentas())