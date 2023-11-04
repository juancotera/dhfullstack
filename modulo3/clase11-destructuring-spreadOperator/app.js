const figurasImportada = require('./datosJuguetes');

//DESAFIO 2
//paso 2
let hotToys = figurasImportada("hotToys");
let bandai = figurasImportada("bandai");
let starWars = figurasImportada("starWars");
//paso 3
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

let collectibles = {
  figuras : unifiedCollectibles,
  listFigures : function(){
    this.figuras.forEach(element => {
      console.log(element)
    });
  },
  figuresByBrand : function(marcaFigura){
    let obtiene = this.figuras.filter(e => marcaFigura == e.marca);
    return obtiene;
  }
}

// collectibles.listFigures();
console.log(collectibles.figuresByBrand('Star Wars'));

