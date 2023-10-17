let array = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte (array){
    let suma = 0
    for (let i = 0 ; i <= array.length ; i++) {
      let toma =  array[i];
        if (toma > 0 && toma<=1000){
          // (console.log(array[i]))
          suma += toma;
        }
        }
        console.log(suma)
      return suma

}
sumatoriaBajoImporte(array)
// sumatoriaBajoImporte(array)