function reporteDePasajeros(paradas){
    let reporte = [];
    let pasajeros = 200;
    for(let i = 0; i <= paradas; i++ ){
      if(i == 0){
        reporte.push("En la estación 0 hay "+ pasajeros +" pasajeros arriba del tren");
      }
      if(i == 1 || i == 2 || i == 3 || i == 4){
        pasajeros += 50;
        pasajeros -= 30;
        reporte.push("En la estación "+ i +" hay "+ pasajeros +" pasajeros arriba del tren");
      }
      if(i == 5){
        pasajeros += 120;
        pasajeros -= 80;
        reporte.push("En la estación "+ i +" hay "+ pasajeros +" pasajeros arriba del tren");
      }
    }
    console.log(pasajeros)
    console.log(reporte)
  }

reporteDePasajeros(6);




var car = "vmw";
let animal = "dog";
const pi = 3.1416;

