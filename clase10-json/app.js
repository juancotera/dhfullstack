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
    let sumaVentas = bicisVendidas.reduce((acum, bicicleta) => {
      return acum + bicicleta.Precio;
    },0) //acumulador es la acumulación parcial de la suma y se inicializa en 0.
    return sumaVentas;
  },

  aumentoBici : function(porcent){
    let bicisConAumento = this.bicicletas.map(function(num){
      let precioAumentado = num.Precio + (num.Precio * (porcent / 100 ))
      num.Precio = precioAumentado
      return precioAumentado
    })
    // return bicisConAumento
    return this.bicicletas
  },

  biciporRodado: function(nRodado){
    let rodadoBici = bicis.filter(function(num){
      return num.Rodado == nRodado
    })
    return rodadoBici
  },

  listarTodasLasBicis: function(){
    let mostrar = bicis.forEach(element => {
      console.log(element)
    });

    return mostrar
  }
}

// console.log(dhBici.biciporRodado(16));
dhBici.listarTodasLasBicis();